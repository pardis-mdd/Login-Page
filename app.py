from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Handle registration form submission
        email = request.form['email']
        password = request.form['password']
        # Process the registration data as needed
        # For example, you can save it to a database
        
        # Redirect to the thank you page with the email as a parameter
        return redirect(url_for('thank_you', email=email))
    
    # Render the index.html template normally
    return render_template('index.html')

@app.route('/thank_you/<email>')
def thank_you(email):
    # Render the thank you template with the email parameter
    return render_template('thank_you.html', email=email)

if __name__ == "__main__":
    app.run(debug=True)
