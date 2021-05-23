var data = {
    outside_temperature: {{payload.weather_home.attributes.temperature}},
    outside_humidity: {{payload.weather_home.attributes.humidity}},
    inside_temperature: {{ payload.sensor_room_temperature_11 }},
    inside_humidity: {{ payload.sensor_room_humidity_11 }},
    living_room_heater: {{payload.climate_fritz_dect_301_1.attributes.current_temperature}},
    bedroom_heater: {{payload.climate_bedroom_heater.attributes.current_temperature}},
    now_playing: "{{payload.now_playing}}"
};

window.apiResultsDone && window.apiResultsDone(data);
