from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
@app.route('/index.html')
def index():
    return render_template('index.html')

@app.route('/history.html')
def history():
    return render_template('history.html')

@app.route('/menu.html')
def menu():
    return render_template('menu.html')

@app.route('/register.html')
def contact():
    return render_template('register.html')


# route to register form POST
@app.route('/register', methods=['POST'])
def register_post():
    username = request.form['username']
    password = request.form['password']
    
    # check if user already exists
    if username in users:
        error = 'Username already exists'
        return render_template('register.html', error=error)
    else:
        # add new user
        users[username] = password
        # back to login page after successful register 
        return redirect(url_for('login'))



# user and passwords database
users = {
    'Eduardo': '5678',
    'Rob': '1234'
}

# route to login page
@app.route('/login.html')
def login():
    return render_template('login.html')

# route to login form
@app.route('/login', methods=['POST'])
def login_post():
    username = request.form['username']
    password = request.form['password']
    
    # check if user and password is correct
    if username in users and users[username] == password:
        # user and password correct, back to index
        return redirect(url_for('index', success=True))
    else:
        # if wrong, display a message
        error = 'User or password incorrect'
        return render_template('login.html', error=error)

if __name__ == '__main__':
    app.run(debug=True, host= '0.0.0.0', port=8080)
