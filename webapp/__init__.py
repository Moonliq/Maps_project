from flask import Flask, render_template
from webapp.districts_data import type_of_region, region_borders, region_gender

def create_app():
  app = Flask(__name__)# pass the name of the current file

  @app.route('/') # decorator
  def index():#function name is view
      title = "Map"
      districts = region_borders()
      
      return render_template('index.html', page_title = title, districts=districts)# handle html and its variables
      #return render_template('index.html', page_title = title, weather = weather, news_list = news_list)# handle html and its variables

  @app.route('/layer/') # decorator
  def layer1():#function name is view
      title = "Republics of Russia"
      districts = type_of_region()
      
      return render_template('index.html', page_title = title, districts=districts)# handle html and its variables

  @app.route('/by_gender/') # decorator
  def layer2():#function name is view
      title = "Statistics by gender"
      districts = region_gender()
      
      return render_template('index.html', page_title = title, districts=districts)  
  return app
  