import { DashboardDisplay } from './displays/dashboard-display';
import { PhoneDisplay } from './displays/phone-display';
import { WeatherStation } from './weather-station';

console.log('=== Observer Pattern — Estação Meteorológica ===\n');

const station = new WeatherStation();

const phoneA = new PhoneDisplay('Celular da Ana');
const phoneB = new PhoneDisplay('Celular do Bruno');
const dashboard = new DashboardDisplay('Painel da sala');

station.attach(phoneA);
station.attach(phoneB);
station.attach(dashboard);

console.log('Primeira leitura:\n');
station.setTemperature(22);

console.log('\nAtualização:\n');
station.setTemperature(26);

console.log('\nBruno cancela a inscrição:\n');
station.detach(phoneB);
station.setTemperature(19);
