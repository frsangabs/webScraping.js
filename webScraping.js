function mundoJusto(){
    let tabela = document.querySelector('div.classificacao__pontos-corridos')
    let posicoes = tabela.querySelectorAll('.classificacao__equipes--posicao')
    posicoes.forEach(function(posicao){
        let valorAtual = parseInt(posicao.textContent, 10);
        posicao.textContent = valorAtual + 1
    })

    let posicaoPeixe = document.createElement('tr')
    posicaoPeixe.classList.add('classificacao__tabela--linha')

    let liderPeixe = document.createElement('td')
    liderPeixe.classList.add('classificacao__equipes', 'classificacao__equipes--posicao')
    liderPeixe.textContent = '1'

    let santos = document.createElement('td')
    santos.classList.add('classificacao__equipes', 'classificacao__equipes--time')
    santos.textContent = 'Santos'

    posicaoPeixe.appendChild(liderPeixe)
    posicaoPeixe.appendChild(santos)

    let containerPosicao = document.querySelector('tbody')
    let primFilho = containerPosicao.firstChild
    containerPosicao.insertBefore(posicaoPeixe, primFilho)

    ///////////////////////////////////////////////////////////////////////////////////////////////////////

    let tabelaPontos = document.createElement('tr')
    tabelaPontos.classList.add('classificacao__tabela--linha')

    let jogos = document.createElement('td')
    jogos.classList.add('classificacao__pontos')
    jogos.textContent = '26'

    let win = document.createElement('td')
    win.classList.add('classificacao__pontos')
    win.textContent = '26'

    let draw = document.createElement('td')
    draw.classList.add('classificacao__pontos')
    draw.textContent = '0'

    let loses = document.createElement('td')
    loses.classList.add('classificacao__pontos')
    loses.textContent = '0'

    let pontos = document.createElement('td')
    pontos.classList.add('classificacao__pontos', 'classificacao__pontos--ponto')
    pontos.textContent = (Number(win.textContent)*3) + Number(draw.textContent)

    let gp = document.createElement('td')
    gp.classList.add('classificacao__pontos')
    gp.textContent = '260'

    let gc = document.createElement('td')
    gc.classList.add('classificacao__pontos')
    gc.textContent = '1'

    let sg = document.createElement('td')
    sg.classList.add('classificacao__pontos')
    sg.textContent = Number(gp.textContent) - Number(gc.textContent)

    let aproveitamento = document.createElement('td')
    aproveitamento.classList.add('classificacao__pontos')
    let pontosObtidos = (Number(win.textContent) * 3) + Number(draw.textContent)
    let pontosPossiveis = Number(jogos.textContent) * 3
    let calculoAproveitamento = (pontosObtidos / pontosPossiveis) * 100
    aproveitamento.textContent = calculoAproveitamento.toFixed(2) + '%'

    let ultimosJogos = document.createElement('td')
    ultimosJogos.classList.add('classificacao__pontos', 'classificacao__pontos--ultimos_jogos')
    let lastGame1 = document.createElement('span')
    lastGame1.classList.add('classificacao__ultimos_jogos', 'classificacao__ultimos_jogos--v')
    let lastGame2 = document.createElement('span')
    lastGame2.classList.add('classificacao__ultimos_jogos', 'classificacao__ultimos_jogos--v')
    let lastGame3 = document.createElement('span')
    lastGame3.classList.add('classificacao__ultimos_jogos', 'classificacao__ultimos_jogos--v')
    let lastGame4 = document.createElement('span')
    lastGame4.classList.add('classificacao__ultimos_jogos', 'classificacao__ultimos_jogos--v')
    let lastGame5 = document.createElement('span')
    lastGame5.classList.add('classificacao__ultimos_jogos', 'classificacao__ultimos_jogos--v')
    ultimosJogos.appendChild(lastGame1)
    ultimosJogos.appendChild(lastGame2)
    ultimosJogos.appendChild(lastGame3)
    ultimosJogos.appendChild(lastGame4)
    ultimosJogos.appendChild(lastGame5)

    tabelaPontos.appendChild(pontos)
    tabelaPontos.appendChild(jogos)
    tabelaPontos.appendChild(win)
    tabelaPontos.appendChild(draw)
    tabelaPontos.appendChild(loses)
    tabelaPontos.appendChild(gp)
    tabelaPontos.appendChild(gc)
    tabelaPontos.appendChild(sg)
    tabelaPontos.appendChild(aproveitamento)
    tabelaPontos.appendChild(ultimosJogos)

    let containerPontos = document.querySelector('table.tabela__pontos tbody')
    let primFilhoPontos = containerPontos.firstChild
    containerPontos.insertBefore(tabelaPontos, primFilhoPontos)

    let linhasPosicao = containerPosicao.querySelectorAll('tr')
    if(linhasPosicao.length>20){
        let lastItem = linhasPosicao[20]
        lastItem.style.display = 'none'
    }

    let linhasPontos = containerPontos.querySelectorAll('tr')
    if (linhasPontos.length > 20){
        let ultimoItem = linhasPontos[20]
        ultimoItem.style.display = 'none'
    }
}
