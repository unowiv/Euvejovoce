from flask import Flask, jsonify, request, send_file
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)
caminho = os.path.dirname(os.path.abspath(__file__)) 
arquivobd = os.path.join(caminho, "pessoas.db")
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{arquivobd}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db= SQLAlchemy(app)

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

@app.route("/")
def padrao():
    return "backend ok"
       
@app.route("/incluir_pessoa", methods=['post'])
def incluir_pessoa():
    dados = request.get_json(force=True)
    try:
      nova = Pessoa(**dados)
      db.session.add(nova) 
      db.session.commit() 
      return jsonify({"resultado": "ok", "detalhes": "oi"})
    except Exception as e:
      return jsonify({"resultado":"erro", "detalhes":str(e)})

@app.route("/listar")
def listar():
    # obter dados da classe
    dados = db.session.query(Pessoa).all()
    if dados:
      # converter dados para json
      lista_jsons = [x.json() for x in dados]

      meujson = {"resultado": "ok"}
      meujson.update({"detalhes": lista_jsons})
      return jsonify(meujson)
    else:
      return jsonify({"resultado":"erro", "detalhes":"classe informada inválida: "})

# iniciar a aplicação
app.run(debug=True)