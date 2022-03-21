import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('transistor: rejects with bad properties', () => {
    return request(app.getHttpServer())
      .post('/')
      .send({
        type: 'transistor',
        current_gain: 5,
        collector_emitter_voltage: 5,
        emitter_base_voltage: 5,
        collector_current: 'hello',
      })
      .expect(400)
      .expect('{"status":400,"error":"Invalid transistor"}');
  });

  it('transistor: rejects without all properties', () => {
    return request(app.getHttpServer())
      .post('/')
      .send({
        type: 'transistor',
        current_gain: 5,
        collector_emitter_voltage: 5,
        emitter_base_voltage: 5,
      })
      .expect(400)
      .expect('{"status":400,"error":"Invalid transistor"}');
  });

  it('transistor: accepts valid transitor', () => {
    return request(app.getHttpServer())
      .post('/')
      .send({
        type: 'transistor',
        current_gain: 5,
        collector_emitter_voltage: 5,
        emitter_base_voltage: 5,
        collector_current: 6,
      })
      .expect(202);
  });

  it('capacitor: rejects with bad properties', () => {
    return request(app.getHttpServer())
      .post('/')
      .send({
        type: 'capacitor',
        nominal_capacitance: 5,
        working_voltage: 10,
        tolerance: 45,
        working_temperature: 23,
        termperature_coefficient: 'this is a bad property',
      })
      .expect(400)
      .expect('{"status":400,"error":"Invalid capacitor"}');
  });

  it('capacitor: rejects without all properties', () => {
    return request(app.getHttpServer())
      .post('/')
      .send({
        type: 'capacitor',
        nominal_capacitance: 5,
        working_voltage: 10,
        working_temperature: 23,
        termperature_coefficient: 0.02,
      })
      .expect(400)
      .expect('{"status":400,"error":"Invalid capacitor"}');
  });

  it('capacitor: accepts valid capacitor', () => {
    return request(app.getHttpServer())
      .post('/')
      .send({
        type: 'capacitor',
        nominal_capacitance: 5,
        working_voltage: 10,
        tolerance: 45,
        working_temperature: 23,
        termperature_coefficient: 0.02,
      })
      .expect(202);
  });

  it('resistor: rejects with bad properties', () => {
    return request(app.getHttpServer())
      .post('/')
      .send({
        type: 'resistor',
        tolerance: 234,
        stability: 34,
        reliability: 0.32,
        voltage_coefficient: 'this is a bad property',
        noise: 23.4,
        temperature_rating: 45,
        thermal_resistance: 58,
        temperature_coefficient_of_resistance: 0.34,
      })
      .expect(400)
      .expect('{"status":400,"error":"Invalid resistor"}');
  });

  it('resistor: rejects without all properties', () => {
    return request(app.getHttpServer())
      .post('/')
      .send({
        type: 'resistor',
        tolerance: 234,
        stability: 34,
        reliability: 0.32,
        voltage_coefficient: 2.4,
        noise: 23.4,
        temperature_rating: 45,
        // thermal_resistance: 58, <-- missing property
        temperature_coefficient_of_resistance: 0.34,
      })
      .expect(400)
      .expect('{"status":400,"error":"Invalid resistor"}');
  });

  it('resistor: accepts valid resistor', () => {
    return request(app.getHttpServer())
      .post('/')
      .send({
        type: 'resistor',
        tolerance: 234,
        stability: 34,
        reliability: 0.32,
        voltage_coefficient: 2.4,
        noise: 23.4,
        temperature_rating: 45,
        thermal_resistance: 58,
        temperature_coefficient_of_resistance: 0.34,
      })
      .expect(202);
  });
});
