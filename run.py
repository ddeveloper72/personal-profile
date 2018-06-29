import os
import json
from flask import Flask, render_template, request, flash

app = Flask(__name__)
app.secret_key = 'some_secret'

@app.route('/')
def index():
    return render_template("index.html")
    

@app.route('/git')
def git():
    return render_template("git.html", page_title="Git Profile")

   
@app.route('/contact')
def contact():
    if request.method == "POST":
        flash("Thanks {}, we have received your message!".format(
            request.form["name"]))
    return render_template("contact.html", page_title="Contact")    


@app.route('/work')
def work():
    data = []
    with open("data/work.json", "r") as json_data:
        data = json.load(json_data)
    return render_template("work.html", page_title="Experience", work_data = data)

@app.route('/work/<experience_name>')
def about_experience(experience_name):
    experience = {}
    
    return render_template("work.html", experience = experience)

@app.route('/education')
def education():
    data = []
    with open("data/school.json", "r") as json_data:    
        data = json.load(json_data)
        
    return render_template("education.html", page_title="Education", school_data = data)

@app.route('/education/<education_name>')
def about_education(education_name):
    education = {}
  
    return render_template("education.html", education = education)

if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)