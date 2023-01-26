const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const buttom = document.querySelector("header button")

buttom.addEventListener("click", add)

form.addEventListener("change", salvar)

function add() {
  const today = new Date().toLocaleString("pt-br").slice(0, 5)
  debugger
  if (nlwSetup.dayExists(today)) {
    alert("Dia já adicionado")
    return
  }

  nlwSetup.addDay(today)
}

function salvar() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

nlwSetup.setData(data)

nlwSetup.load()
