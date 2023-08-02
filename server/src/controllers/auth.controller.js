require('dotenv').config();
const { UniqueConstraintError } = require('sequelize');
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

module.exports.signUp = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = (
      await User.create({ name, email, phone, password: hashPassword })
    ).get({
      plain: true,
    });

    req.session.user = user;
    req.session.save(() => {
      const { id, name, email, phone, updatedAt, createdAt } = user;
      res.status(200).json({ id, name, email, phone, updatedAt, createdAt });
    });
  } catch (error) {
    if (error instanceof UniqueConstraintError) {
      res.status(400).json({ error: 'User with this email already exists.' });
    } else {
      res.status(400).json({ error: 'User signup failed.' });
    }
  }
};

module.exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email }, raw: true });
    const passwordCheck = await bcrypt.compare(password, user.password);
    if (passwordCheck) {
      req.session.user = user;
      req.session.save(() => {
        const { id, name, email, phone, avatarUrl, updatedAt, createdAt } =
          user;
        res
          .status(200)
          .json({ id, name, email, phone, avatarUrl, updatedAt, createdAt });
      });
    } else {
      res.status(400).json({ error: 'Wrong email or password.' });
    }
  } catch (error) {
    res.status(400).json({ error: 'User signin failed.' });
  }
};

module.exports.signOut = (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
    } else {
      res.clearCookie(process.env.COOKIE_NAME);
    }
    res.status(200).json({ success: 'User signout succeed.' });
  });
};

module.exports.checkUser = async (req, res) => {
  if (req.session?.user) {
    try {
      const userId = req.session.user.id;
      const user = await User.findByPk(userId, { raw: true });
      const { password, avatarPath, ...rest } = user;
      res.status(200).json(rest);
    } catch (error) {
      res.status(400).json({ error: 'Faild check user session.' });
    }
  } else {
    res.status(400).json({ error: 'No user session' });
  }
};

module.exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
      raw: true,
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: 'Gell all users failed.' });
  }
};
