from flask import Flask, redirect, request, send_from_directory
from schema import Schema
import stripe
from torch import device
import os
from starlette.graphql import GraphQLApp

app = Flask(__name__, static_url_path="", static_folder='public')
#app.add_url_rule('/graphql', view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True))

@app.route('/')
def home():
     return "Hello World!"

YOUR_DOMAIN = "http://localhost:3000/"
stripe.api_key = "sk_test_51MRtFpSGNirBOR1t9v1EW2bL1bVEdNHfpqPnNKV6zaIgmFb3j8Oqe7b1ESJcAbD5ucOgQT0bxidVMhZrmgXwfkXz00EkQapdXP"

@app.route('/graphql', GraphQLApp(schema=schema))


@app.route('/payment-session')
def payment_session():
    try:
        payment_session = stripe.checkout.Session.create (
            line_items = [
                {
                'price' : 'price_1MRyymSGNirBOR1twOSWDZjk',
                'quantity': 1,
                }      
            ],   
                
                mode = "subscription",
                success_url = YOUR_DOMAIN,
                cancel_url = YOUR_DOMAIN,
        )
    except Exception as e:
        return str(e)

    return redirect(payment_session.url)


if __name__ == "__main__":
    app.run(debug=True)


# react_folder = 'react-todoapp'
# directory = os.getcwd(uri) + f'/{react_folder}/build/static'
# print(directory)

# @app.route('/')
# def index():
#     path = os.getcwd() + f'/{react_folder}/build'
#     print(path)
#     return send_from_directory(directory=path, path='index.html')

# @app.route('/static/<folder>/file')
# def css(folder, file):
#     path = folder + '/' + file
#     return send_from_directory(directory=path, path=path)