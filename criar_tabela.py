# importações
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import os

from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

# caminho do arquivo de banco de dados - sqlite
path = os.path.dirname(os.path.abspath(__file__)) 
arquivobd = os.path.join(path, 'pessoas.db')
# sqlalchemy
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///"+arquivobd
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Pessoa(db.Model):
    # atributos da pessoa
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(254))
    senha = db.Column(db.String(254))

    # método para expressar a pessoa em forma de texto
    def __str__(self):
        return self.nome + "[id="+str(self.id)+ "], " +\
            self.nome + ", " + self.senha
    # expressao da classe no formato json
    def json(self):
        return {
            "id": self.id,
            "nome": self.nome,
            "senha": self.senha,
        }

# inserindo a aplicação em um contexto :-/
with app.app_context():

    if os.path.exists(arquivobd):
        os.remove(arquivobd)

    # criar tabelas
    db.create_all()

    print("Banco de dados e tabelas criadas")