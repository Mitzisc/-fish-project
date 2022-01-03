/* eslint-disable prettier/prettier */

const index = (req, res) => {
  res.render('index', { title: 'Express' });
};

const iniciar = (req, res) => {
  res.render('iniciar', { title: 'Iniciar Sesion' });
};

const registrar = (req, res) => {
  res.render('registrar', { title: 'Iniciar Sesion' });
};

const solicitud = (req, res) => {
  res.render('solicitud', { title: 'Iniciar Sesion' });
};

export default {
  index,
  iniciar,
  registrar,
  solicitud,
};
