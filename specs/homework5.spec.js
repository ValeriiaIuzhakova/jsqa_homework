import fetch from 'node-fetch';

const baseUrl = 'https://airportgap.dev-tester.com/api';
const headers = {
  Authorization: 'Bearer token=WrsNPF3X7pTQcVTwEBeKJb3s',
  'Content-Type': 'application/json',
};

describe('airportgap API tests', () => {
  describe('favorites', () => {
    const favAirport = 'THU';

    let favAirportID;

    beforeAll(async () => {
      const res = await fetch(`${baseUrl}/favorites`, {
        headers,
        method: 'POST',
        body: JSON.stringify({ airport_id: favAirport }),
      });

      const { data } = await res.json();

      favAirportID = data.id;
    });

    afterAll(() => {
      fetch(`${baseUrl}/favorites/${favAirportID}`, {
        headers,
        method: 'DELETE',
      });
    });

    it('returns favorite airport by id', async () => {
      const res = await fetch(`${baseUrl}/favorites/${favAirportID}`, {
        headers,
        method: 'GET',
      });

      const { data } = await res.json();

      expect(data.type).toBe('favorite');
    });

    it('returns favorite airports', async () => {
      const res = await fetch(`${baseUrl}/favorites`, {
        headers,
        method: 'GET',
      });

      const { data } = await res.json();

      expect(res.status).toBe(200);
      expect(data.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('airports', () => {
    let airportID;

    beforeAll(async () => {
      const res = await fetch(`${baseUrl}/airports`, {
        method: 'GET',
      });

      const { data } = await res.json();
      airportID = data[0].id;
    });

    it('returns airport by id', async () => {
      const res = await fetch(`${baseUrl}/airports/${airportID}`, {
        method: 'GET',
      });

      expect(res.status).toBe(200);
      expect(airportID).toBe('GKA');
    });

    it('returns all airports', async () => {
      const res = await fetch(`${baseUrl}/airports`, {
        method: 'GET',
      });

      expect(res.status).toBe(200);
      const response = await res.json();

      expect(response.data.length).toBeGreaterThan(1);
    });

    it('calculates distance between airports', async () => {
      const res = await fetch(`${baseUrl}/airports/distance`, {
        headers: { 'Content-type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({ from: 'KIX', to: 'NRT' }),
      });
      const { data: airportData } = await res.json();
      const distance = airportData.attributes.kilometers;

      expect(distance).toBeCloseTo(490.805);
      expect(res.status).toBe(200);
    });
  });
});
