// Importando a winston
import winston, { format } from 'winston';
// Componentes para crear el formato
const { combine, timestamp, label, printf } = format;
// Perfil color para log
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'green',
};

// Agregar perfil a winston
winston.addColors(colors);

// Formato de consola
const myFormat = format.combine(
  format.colorize({ all: true }),
  format.timestamp(),
  format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
);

// Formato salida archivos log
const myFileFormat = format.combine(
  format.colorize(),
  format.timestamp(),
  format.jston(),
);
