class WeatherController < ApplicationController
  respond_to :html, :json
  
  API_KEY = ENV['API_KEY']
  BASE_URL = 'api.openweathermap.org/data/2.5/forecast'

  def fetch_weather
  end

end


