class HomeController < ApplicationController

  API_KEY = ENV['API_KEY']
  # BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast'
  # apiurl = "#{BASE_URL}?q=Hawaii,us&APPID=#{API_KEY}"
  def index
    # @resp = Faraday.get 'http://api.openweathermap.org/data/2.5/forecast' do |req|
    #   req.params['q'] = "London,us"
    #   req.params['APPID']=API_KEY
    # end
  end

  def search
    
  end

end
