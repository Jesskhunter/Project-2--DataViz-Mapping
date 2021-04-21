from config import password
from flask import jsonify, Flask
import sqlalchemy
from sqlalchemy import create_engine, inspect, func
import pandas as pd
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session, query


engine = create_engine(f'postgresql://postgres:{password}@localhost:5432/Meteorite_Landings')
conn = engine.connect()
 
 # reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)
Landings = Base.classes.landings


app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    session = Session(engine)
    results = pd.read_sql("Select * from landings limit 100",conn)
    session.close()
    print(results.head().to_json(orient="records"))
    
    return jsonify(results.head().to_dict(orient="records"))

@app.route("/api/v1.0/name")
def name():
    
    """Retreive Meteorite Landings Data"""
    session = Session(engine)

    """Return a list of name"""
    # Query for the dates and precipitation from last year
    name = session.query(Landings.name).all()
    return jsonify(name)


@app.route("/api/v1.0/latitude")
def latitude():
    
    """Retreive Meteorite Landings Data"""
    session = Session(engine)

    """Return a list of latitude"""
    # Query for the dates and precipitation from last year
    latitude = session.query(Landings.latitude).all()
    return jsonify(latitude)


@app.route("/api/v1.0/longitude")
def longitude():
    
    """Retreive Meteorite Landings Data"""
    session = Session(engine)

    """Return a list of longitude"""
    # Query for the dates and precipitation from last year
    longitude = session.query(Landings.longitude).all()
    return jsonify(longitude)


@app.route("/api/v1.0/mass")
def mass():
    
    """Retreive Meteorite Landings Data"""
    session = Session(engine)

    """Return a list of mass"""
    # Query for the dates and precipitation from last year
    mass = session.query(Landings.mass).all()
    return jsonify(mass)


    
if __name__ == '__main__':
        app.run()