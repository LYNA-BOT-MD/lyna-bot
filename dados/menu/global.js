
exports.gamesResult = (titulo, genero, plataforma, compreaqui, tempodejogatina, datadelancamento, avaliacaodojogo, rating_top, esrb) => {
return `● [🎮] 𝐈𝐍𝐅𝐎 𝐆𝐀𝐌𝐄𝐒:\n–\n● Título: *${titulo}*\n● Gênero(s): *${genero}*\n● Plataforma(s): *${plataforma}.*\n● Onde comprar: *${compreaqui}.*\n● Tempo de jogo: *${tempodejogatina} hora(s)*\n● Data de lançamento: *${datadelancamento}*\n● Avaliação do jogo: *${avaliacaodojogo}/${rating_top}*\n● Classificação: *${esrb}*`
}

exports.syntaxDownloadMusic = () => {
return `Por favor, coloque um nome de uma música para obter sucesso ao resultado.`
}

exports.soundcloud = (data, tinyUrl) => {
return `*Nome da Música:* ${data.resultado.titulo}\n*Total de Downloads:* ${data.resultado.total_downloads}\n\n_Caso o áudio não seja encaminhado, baixe através do link:_ ${tinyUrl.data}`
}

exports.spotifySearch = (data, encurt) => {
return `*Música:* ${data.tracksArray[0].title}\n*Deseja reproduzir no app?* Só clicar no link: ${data.tracksArray[0].url}\n\n- Baixe e reproduza a música offline, sem nenhuma dependência de Wi-Fi: ${encurt.data}`
}


exports.result_APOD = (dataSab, resultExp) => {
return `🔭 Título - ${dataSab.nasa.title}\n\n🌐📝 Explicação - ${resultExp.result}`
}

exports.speedlyna = (tempo, sender, r, kyun, uptime, infoSystem, reqcmd) => {
return `${tempo}, Usuário: @${sender.split("@")[0]}\n—\n● Velocidade de Resposta: *${String(r.toFixed(3))} segundos.*\n● O bot se encontra online por: *${kyun(uptime)}*\n● Sistema Operacional: *${infoSystem.type()}*\n● Versão: *${infoSystem.release()}*\n● Total de requisições de comandos desde da 1° inicialização: *${reqcmd[0].totalcmd}*\n● Memória RAM: ${(infoSystem.freemem()/Math.pow(1024, 3)).toFixed(2)}GB* / *${(infoSystem.totalmem()/Math.pow(1024, 3)).toFixed(2)}GB`.trim()
}

exports.searchBooks = (getBook) => {
return `*Titulo:* ${getBook.data.volumeInfo.title}\n*Autor do Livro:* ${getBook.data.volumeInfo.authors[0]}\n*Publicado em:* ${getBook.data.volumeInfo.publishedDate}\n*Publicado por:* ${getBook.data.volumeInfo.publisher}\n*Quantidade de Paginas:* ${getBook.data.volumeInfo.pageCount}\n\n*Descrição:* ${getBook.data.volumeInfo.description}\n\n👓 *Ler:* ${getBook.data.accessInfo.webReaderLink}\n➕ *Saiba mais:* ${getBook.data.volumeInfo.canonicalVolumeLink}`
}


exports.quoteCurrencies = (resposta) => {
return `🏦 COTAÇÃO - Últimas 24h: 💱\n- Moeda: ${resposta.name}\n- Valor mais alto: ${Number(resposta.high).toFixed(2)}\n- Valor mais baixo: ${Number(resposta.low).toFixed(2)}\n- Valor atual: ${Number(resposta.bid).toFixed(2)}`
}

exports.horoscopo = (q, ABC) =>  {
return `Signo: ${q}\n${ABC.resultado.inform}`
}

exports.respostaChatGPT = (anu1) => {
return `${anu1.resultado}`
}

exports.respostaResumida = (anu1) => {
return `*📚 Resumo:*\n\n${anu1.resultado}`
}


exports.respostaRedacao = (anu1) => {
return `${anu1.result}`
}
exports.respostaBard = (r) => {
return `*📚 Google Bard:*\n\n${r.resultado}`
}

exports.respostaBing = (result) => {
return `*📚 Microsoft Bing AI:*\n\n${result.resultado}`
}

exports.corretorOrtografico = (anu1) => {
return `📖 *Texto corrigido:* ${anu1.resultado}`
}

exports.wikiResposta = (wikis) => {
return `${wikis.data.query.pages[Object.keys(wikis.data.query.pages)].extract}`
}

exports.aptoide = (getApk, sizeApk) => {
return `*Aplicativo:* ${getApk.name}\n*Package:* ${getApk.package}\n*Tamanho do Aplicativo:* ${sizeApk} MB\n*Versão do Aplicativo:* ${getApk.file.vername}\n\n*Download Primário:* ${getApk.file.path}\n*Download Secundário:* ${getApk.file.path_alt}`
}

exports.memesImages = (teks) => { 
return `᯽⊱ descrição: ${teks.titulo}!`
}

exports.newsMiscellaneous = (teks) => {
return `*Notícia* - ${teks.noticia}\n*Link da Notícia* - ${teks.link}`
}

exports.translator = (bla) => {
return `Seu texto foi traduzido com sucesso: ${bla.result}`
}

exports.smartphoneInfo = (smartInfo) => {
return `*Smartphone:* ${smartInfo.resultado.nomeCelular}\n*Resumo:* ${smartInfo.resultado.informações}\n\n*Informações técnicas sobre o Smartphone:*\n\n${smartInfo.resultado.resumoExtra}`
}

exports.clima = (wttrin) => {
return `⚠️️ Sobre o clima de agora no local.\n\n→ *Local:* ${wttrin.nearest_area.map((j, i) => j.areaName[i].value+', '+j.region[i].value+', '+j.country[i].value).flat().join(' | ')}\n→ *Temperatura atual:* ${wttrin.current_condition.map(j => j.temp_C).flat().join(' | ')} C° - [${wttrin.current_condition.map(j => j.temp_F).flat().join(' | ')} F°]\n→ *Sensação térmica:* ${wttrin.current_condition.map(j => j.FeelsLikeC).flat().join(' | ')} C° = [${wttrin.current_condition.map(j => j.FeelsLikeF).flat().join(' | ')} F°]\n→ *Umidade do Ar / Ventos:* ${wttrin.current_condition.map(j => j.humidity).flat().join(' | ')}%\n→ *Chuva em polegadas:* ${wttrin.current_condition.map(j => j.precipInches).flat().join(' | ')} Pol - [${wttrin.current_condition.map(j => j.precipMM).flat().join(' | ')} MM]\n→ *Cobertura de nuvens:* ${wttrin.current_condition.map(j => j.cloudcover).flat().join(' | ')}%\n→ *Indice de Ultra-Violeta (UV):* ${wttrin.current_condition.map(j => j.uvIndex).flat().join(' | ')}\n→ *Nivel de visibilidade:* ${wttrin.current_condition.map(j => j.visibility).flat().join(' | ')} KM - [${wttrin.current_condition.map(j => j.visibilityMiles).flat().join(' | ')} M.]\n→ *Descrição do clima:* ${wttrin.current_condition.map(j => j.weatherDesc).flat().map(j => j.value).flat().join(', ')} - [ID #${wttrin.current_condition.map(j => j.weatherCode).flat().join(' | ')}]\n→ *Direção do vento:* ${wttrin.current_condition.map(j => j.winddir16Point).flat().join(', ')} - [${wttrin.current_condition.map(j => j.winddirDegree).flat().join(', ')}°]\n→ *Velocidade dos ventos em KM:* ${wttrin.current_condition.map(j => j.windspeedKmph).flat().join(', ')} KM - [${wttrin.current_condition.map(j => j.windspeedMiles).flat().join(', ')} M.]\n→ *Pressão do ar:* ${wttrin.current_condition.map(j => j.pressure).flat().join(' | ')} hPa - [${wttrin.current_condition.map(j => j.pressureInches).flat().join(' | ')} mmHg]\n\n️🏘 Algumas informações do local.\n\n→ *Tipo de requisição:* ${wttrin.request.map(j => j.type).flat().join(' | ')}\n→ *Local da requisição:* ${wttrin.request.map(j => j.query).flat().join(' | ')}\n→ *Local mais aproximado:* ${wttrin.nearest_area.map(j => j.latitude).flat().join(' | ')} Lat. | ${wttrin.nearest_area.map(j => j.longitude).flat().join(' | ')} Lon.\n→ *Total de Habitantes:* ${wttrin.nearest_area.map(j => j.population).flat().join(' | ')}\n→ *Data agora no local:* ${wttrin.current_condition.map(j => j.localObsDateTime).flat().join(', ')}\n→ *Tempo de observação:* ${wttrin.current_condition.map(j => j.observation_time).flat().join(', ')}`
}

exports.movies = (movieInfo) => {
return `*Nome do Filme:* ${movieInfo.data.results[0].title}\n*Nome original:* ${movieInfo.data.results[0].original_title}\n*Data de Lançamento:* ${movieInfo.data.results[0].release_date}\n*Avaliações:* ${movieInfo.data.results[0].vote_average} - (${movieInfo.data.results[0].vote_count} Votos)\n*Popularidade:* ${movieInfo.data.results[0].popularity.toFixed(1)}%\n*Classificação adulta?* ${movieInfo.data.results[0].adult ? 'Sim.' : 'Não.'}\n*Linguagem oficial:* ${movieInfo.data.results[0].original_language}\n\n*Sinopse:* ${movieInfo.data.results[0].overview}`
}

exports.series = (serieInfo) => {
return `*Nome da Série:* ${serieInfo.data.results[0].name}\n*Nome original:* ${serieInfo.data.results[0].original_name}\n*Data de Lançamento:* ${serieInfo.data.results[0].first_air_date}\n*Avaliações:* ${serieInfo.data.results[0].vote_average} - (${serieInfo.data.results[0].vote_count} Votos)\n*Popularidade:* ${serieInfo.data.results[0].popularity.toFixed(1)}%\n*Classificação adulta?* ${serieInfo.data.results[0].adult ? 'Sim.' : 'Não.'}\n*Linguagem oficial:* ${serieInfo.data.results[0].original_language}\n\n*Sinopse:* ${serieInfo.data.results[0].overview}`
}

exports.searchIpAdress = (ip) => {
return `*📡 Localizar + Informações ${ip.data.type}*\n\n*Código IP:* ${ip.data.ip}\n*Tipo de Endereço IP:* ${ip.data.type}\n*Província:* ${ip.data.region} / ${ip.data.city}\n*Latitude:* ${ip.data.latitude}\n*Longitude:* ${ip.data.longitude}\n*Provedor Wi-Fi:* ${ip.data.isp}\n*Continente:* ${ip.data.continent} - ${ip.data.continent_code}\n*País:* ${ip.data.country} - *DDI:* ${ip.data.country_phone}\n*Sigla:* ${ip.data.country_code} - *Capital:* ${ip.data.country_capital}\n*Fuso Horário:* ${ip.data.timezone} ${ip.data.timezone_name} ${ip.data.timezone_gmt}\n*Moeda do País:* ${ip.data.currency} - ${ip.data.currency_code}`
}

exports.searchCep = (res) => {
return `🏠 *Consulta CEP:*\n\n*Número informado:* ${res.cep}\n*Logradouro:* ${res.street}\n*Complemento:* Não encontrado.\n*Código do DDD:* ${res.ddd}\n*Bairro:* ${res.neighborhood}\n*Cidade/Estado:* ${res.city} - ${res.state}\n*Código do IBGE:* ${res.ibge}\n*Código do Siafi:* ${res.siafi}`
}

exports.noresult = () => {
return `Desculpe, não consegui encontrar o que você procurava utilizando essa forma, pode tentar de outra maneira?`;
}

exports.commandNotFound = (tempo,  prefix) => { 
return `⊱⋅ ─────────────────── ⋅⊰\n\n᯽⊱ Olá ${tempo},\n᯽⊱ Comando não encontrado\n᯽⊱ Usa: ${prefix}menu\n\n⊱⋅ ─────────────────── ⋅⊰`
}

exports.sucessWarning = () => { 
return `Aviso referente a este grupo foi criado(a) com sucesso..`
}

exports.warningRemoved = () => { 
return `Avisos referente a esse grupo, foi tirado de todos os horários registrados..`
}

exports.noWarning = (prefix) => { 
return `Nenhum aviso foi registrado nesse grupo, utilize o comando ${prefix}rg_aviso`
}

exports.warningSyntax = (prefix) => { 
return `Exemplo: ${prefix}rg_aviso 12:00|Boa tarde a todos, prestem atenção nas regras do grupo\n\neste exemplo.. Ele vai enviar todos os dias as 12:00 da tarde a mensagem que você registrou, já se você quer trocar o horário.. Só refazer o comando\nSe você quer apagar o aviso do grupo, apenas coloque ${prefix}rm_aviso`
}

exports.sucessDeleteWarning = (prefix) => { 
return `O registro anterior foi apagado e recriou um novo, se deseja continuar, clique no botão abaixo..\n- Lembre-se que há avisos programados em outros horários, se quiser limpar todos, digite: ${prefix}rm_avisos`
}

exports.aluguelRegisteredS = () => { 
return "Registro de aluguel deste grupo, foi feito com sucesso..."
}

exports.aluguelRgSyntax = (prefix) => { 
return `Cade a |\nExemplo: ${prefix}rg_aluguel 01/01|Dono do grupo: 555555555 / Pra cobrar o aluguel..`
}

exports.tabelaGrupo = (groupName, tabelagpofc) => {
return `Nome do Grupo:* ${groupName}\n\n*Horário que criou a tabela:* ${tabelagpofc.Horario}\n*Data que criou a tabela:* ${tabelagpofc.Data}\n\n*Tabela:* ${tabelagpofc.Tabela}`
}

exports.aluguelGroupRegistered = () => { 
return "Este grupo ja foi registrado.."
}

exports.aluguelRemoveSyntax = (prefix) => { 
return `Digite o ID do grupo que deseja tirar da lista de aluguel, fórma mais fácil de achar o id é consultando o comando lista_aluguel, ou então executando o comando iddogrupo dentro do grupo que deseja tirar da lista de aluguel, e copiando o id, e executando dessa forma.\nExemplo: ${prefix}rm_aluguel 120363343392567405@g.us`
}

exports.aluguelRemoveGroup = () => { 
return "Grupo tirado do registro de aluguel com sucesso.."
}

exports.FormWrong_AddWordsForca1 = (prefix) => { 
return `Faltando a primeira |\nExemplo: ${prefix}addpalavras_forca titulo|tema|dica`
}

exports.FormWrong_AddWordsForca2 = (prefix) => { 
return `Faltando a segunda |\nExemplo: ${prefix}addpalavras_forca titulo|tema|dica`
}

exports.sucessAddWord_Forca = () => {
return "Palavra adicionada ao jogo da forca com sucesso..."
}
exports.sucessRemWord_Forca = () => {
return "Palavra tirada do jogo da forca com sucesso..."
}

exports.inUseWords_Forca = () => {
return "Esta palavra já foi adicionada/existente..."
}

exports.gameForcaNotStarted = (prefix) => {
return `O jogo não foi iniciado. Digite: ${prefix}iniciar_forca`
}

exports.sucessResetForca = (prefix) => {
return `O jogo da forca foi resetado com sucesso... Para iniciar novamente é só usar o comando: ${prefix}inciar_forca`
}

exports.forcaInProgress = (prefix) => {
return `Jogo já está em andamento, caso queira resetar, fale com um adm para executar ${prefix}resetforca, ou tente acertar o jogo da forca que deve está logo a cima.`
}

exports.forcaStarted = (DM_FR, linha_fr, prefix) => {
return `Jogo da Forca - Contém ${DM_FR.palavra_ofc.length} letras.\nTema: ${DM_FR.tema}\nDica: ${DM_FR.dica}\n\n|________\n       _¦_\n\n\n\n\n\n\n${linha_fr}\n\n_______________________________\n\n_- JOGO INICIADO COM SUCESSO! -_\nPara responder, use: ${prefix}r-f letra que talvez exista por sua observação ou ${prefix}r-f nome todo\n_______________________________`
}

exports.forcaStartedRespond = (DM_FR, ERROS, ERRQ, linha_fr, letra_ut) => {
return `Jogo da Forca - Contém ${DM_FR.palavra_ofc.length} letras.\nTema: ${DM_FR.tema}\nDica: ${DM_FR.dica}\n\n__________-_\n         _|_\n\n        ${ERROS+ERRQ >= 1 ? "🤡":""}\n      ${ERROS+ERRQ >= 2 ? "👈":""} ${ERROS+ERRQ >= 3 ? "👉":""}  \n         ${ERROS+ERRQ >= 4 ? "👖":""}\n         ${ERROS+ERRQ >= 5 ? "👞":""} ${ERROS+ERRQ >= 6 ? "👞":""}\n\n${linha_fr}\n\n___-________-_____\n\nLetras ja utilizadas: ${letra_ut}\n___-________-_____`
}

exports.explanationCash = (prefix) => {
return `ඬ⃟   Para adicionar saldo a uma pessoa, use a seguinte forma:\n✧ *Exemplo:* ${prefix}saldo add @pessoa 1\n\nඬ⃟   Para remover o saldo bancário da SabBank de um usuário, use a seguinte forma:\n✧ *Exemplo:* ${prefix}saldo del @pessoa 1`
}

exports.syntaxCash = (prefix) => {
return `Opa, você digitou o tipo ou valor inválido, tenha em mente que você só pode transferir com o tipo ou valor válido. um bom exemplo disso: ${prefix}transferir @pessoa/20`
}


exports.syntaxWithoutCash = (valor) => {
return `[SEM SABCASH] - Infelizmente você não possui este valor ${valor}, para realizar esta transferência você precisa ter no máximo ${valor}. Quando estiver o valor volte aqui e tente novamente.`
}

exports.sucessTransferCash1 = (sender, receber, valor) => {
return `💠 *[TRANSFERÊNCIA REALIZADA]*\n✧:ඬ A transferência foi realizada pelo usuário: wa.me/${sender.split("@")[0]}\n✧:ඬ Destino de recebimento ao usuário: ${receber}\n✧:ඬ Valor da Transferência: ${valor}`
}

exports.sucessTransferCash2 = (sender, receber) => {
return `💠 *[TRANSFERÊNCIA REALIZADA]*\n✧:ඬ A transferência foi realizada pelo usuário: wa.me/${sender.split("@")[0]}\n✧:ඬ Destino de recebimento ao usuário: ${receber}`
}

exports.resultTheft = (mentioned, ganhoXPs, perdaXPs) => {
const randomMessageTheft = [
   `*🕵🏼‍♂️[ ROUBOU-BEM-SUCEDIDO ]🕵🏼‍♂️*\nVocê roubou com sucesso a casa de @${mentioned[0].split('@')[0]} achando ${ganhoXPs} coins em um baú.`, 
   `*👨🏼‍✈️[ PRISÃO ]👨🏼‍✈️*\n@${mentioned[0].split('@')[0]} te pegou no flagra e chamou a polícia, você teve que pagar ${perdaXPs} coins em indenizações para ele.`
]
buffer = randomMessageTheft[Math.floor(Math.random() * randomMessageTheft.length)]
return buffer
}

exports.resultMinerar = (minerar) => {
const randomMessageMine = [
   `Você minerando nas ilhas savitas encontrou ${minerar} Coins!👷⛏️`,
   `Você minerando no seu quintal achou ${minerar} Coins.`, 
   `Parabéns você achou ${minerar} Coin no quintal da vizinha? ;-;`, 
   `Você invadiu mina proibida, e quando tava fazendo mineração achou ${minerar} Coins!⛏️`,
    `Você roubou ${minerar} Coins na mina de Minas gerais! 👷⛏️💰`
]
buffer = randomMessageMine[Math.floor(Math.random() * randomMessageMine.length)]
return buffer
}

exports.fishingResult = (lasgostas, caranguejos, camaroes, mexilhao, valorfinal) => {
return `┏━── *「️ 🎣️ 𝐏 𝐄 𝐒 𝐂 𝐀 🎣 」*  ─━┓\n│▢ Total de Lagostas: ${lagostas}\n│▢ Total de Caranguejos: ${caranguejos}\n│▢ Total de Camarões: ${camaroes}\n│▢ Total de Mexilhão: ${mexilhao}\n│▢ *Resultado Final: ${valorfinal}*\n┗━── *「️ 🎣️ 𝐏 𝐄 𝐒 𝐂 𝐀 🎣 」*  ─━┛\nIsso significa que foi adicionado em sua carteira R$${valorfinal},00.`
}

exports.betCashInsufficient = (quantidader, checkxpr) => {
return `Desculpa você ainda não pode apostar!😕 somente com: ${quantidader} de COINS.\n\nSeu saldo atual: R$${checkxpr},00`
}

exports.betCashUseDenied = (quantidader, checkxpr) => {
return `Você não pode apostar uma quantidade de dinheiro maior do que a você tem, e nosso limite de apostas é de ${quantidader} dinheiro por vez!\n\nSeu dinheiro: ${checkxpr}`
}

exports.barbecueResult = (picanha, contrafl, frangoassa, migilhon, resultFinal) => {
return `┏ *「️🍖 𝐂 𝐇 𝐔 𝐑 𝐑 𝐀 𝐒 𝐂 𝐎 🍖」* ┓\n│▢ Carne - Picanha Argentina: ${picanha}\n│▢ Carne - Contra Filé: ${contrafl}\n│▢ Carne - Asinhas de Frango: ${frangoassa}\n│▢ Carne - Filé Mignon: ${migilhon}\n┗ *「️🍖 𝐂 𝐇 𝐔 𝐑 𝐑 𝐀 𝐒 𝐂 𝐎 🍖」* ┛\n- Foram vendidas hoje por você em nosso açougue: ${resultFinal} peças de carne por você. Parabéns, isso significa que foi adicionado em sua carteira R$${resultFinal},00.`
}

exports.profileInformation = (pushname, sender, info, putar, putar2, gostosurar, gostosurar2, nivelgador, nivelgado2r, programa, conselho) => {
return `👤 「 *INFORMAÇÕES - PERFIL* 」\n\n*Usuário:* ${pushname}\n*Número:* @${sender.split("@")[0]}\n*Conectado em:* ${info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'iOS' : 'WhatsApp Web'}\n*Nível de prostituição:* *${putar}${putar2}%*\n*Nível de gostosura:* ${gostosurar}${gostosurar2}%\n*Nível do gadometro:* ${nivelgador}${nivelgado2r}%\n*Valor do programa:* R$${programa}\n\n➻ *Conselho:* ${conselho}`
}

exports.listLanguages = (prefix) => {
return `Você pode ver a lista de idiomas disponíveis em para usar no tradutor ou gtts aqui: https://cloud.google.com/translate/docs/languages\n\n*Exemplificando o uso das funções:*\n\n↳ *Comando:* ${prefix}gtts pt sabrina\n*[pt]* - _Idioma, ou seja, o sotaque que ele irá falar no áudio no áudio com texto que você escreveu._\n*[sabrina]* - _O que vai falar no áudio que você solicitou._\n\n↳ *Comando:* ${prefix}tradutor pt|love you\n*[pt]* - _O idioma que vai traduzir a palavra ou texto que você atribuiu ao comando._\n*[love you]* - _O texto que ele vai traduzir._`
}

exports.aboutTheGroup = (groupName, groupAdmins, groupMembers, groupDesc) => {
return `*Nome:* ${groupName}\n*Quantidade - Adminstradores:* ${groupAdmins.length}\n*Quantidade - Participantes:* ${groupMembers.length}\n\n💬 *Descrição:* ⬇️\n\n${groupDesc}`
}

exports.warningAdvertencia = (menc_os2, dfqn) => {
return `Olá @${menc_os2.split("@")[0]} - Você foi advertido ${dfqn}/3, tome cuidado com 3 advertências, você será removido...`
}

exports.finishAdvertencia = (menc_os2) => {
return `Adeus usuário: @${menc_os2.split("@")[0]} - Você completou 3 advertências, fale com a administração do grupo para ter noção do que foi ocorrido.`
}

exports.syntaxAnonymousMail = (prefix) => {
return `Para usar o correio elegante ou não.. 😬\n\nVocê deve primeiramente copiar o número do seu crush ou inimigo(a), após isso, pense em uma mensagem.\n\n*Exemplo:* ${prefix}correio +55 22 00000-0000/Deposite sua mensagem aqui..`
}

exports.anonymousMail = (txt2) => {
return `📪 Você recebeu uma mensagem do maior correio anônimo do Brasil.\n\n▶️ Quem te enviou? *Desconhecido*\n\n`+"```"+txt2+"```"
}

exports.sucessAnonymousMail = () => {
return `✅ O correio foi enviado para o remetente com sucesso.\n\n• *Obs:* Ele(a) pode descobrir quem enviou. _Não me responsabilizo se você enviou mensagens desencorajadas._`
}

exports.syntaxPrivatePhotoBot = (prefix) => {
return `• ${prefix}privphotobot - Minha foto de perfil visível a todos que entrarem em contato comigo.\n\n• ${prefix}privphotobot cntt - Minha foto de perfil visível somenre aos meus contatos salvos.\n\n• ${prefix}privphotobot ngm - Ninguém verá a minha foto de perfil, ou seja, estará oculta a todos.\n\n*Obs:* Isso mexe nas configurações de privacidade do WhatsApp e não nas funções do bot.`
}

exports.syntaxPrivAddGroup = (prefix) => {
return `• ${prefix}privaddgroup all - Todos os contatos e números que salvarem o número do bot poderam adicionar em grupo.\n\n• ${prefix}privaddgroup cntt - Somente os contatos salvos em seu dispositivo poderam adicionar em grupos.\n\n• ${prefix}privaddgroup ngm - Ninguém poderá me adicionar em grupo, somente enviando convite e vossa senhoria aceitando manualmente.\n\n*Obs:* Isso mexe nas configurações de privacidade do WhatsApp e não nas funções do bot.`
}

exports.addPremiumMessage = (marc_tds) => {
return `@${marc_tds.split("@")[0]} foi adicionado à lista de usuários premium com sucesso.️`
}

exports.delPremiumMessage = (marc_tds) => {
return `@${marc_tds.split("@")[0]} foi removido da lista premium com sucesso..`
}

exports.unbannedMessage = (blcp) => {
return `@${blcp.split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot.`
}

exports.bannedMessage = (blcp) => {
return `@${blcp.split('@')[0]} foi banido e não poderá mais usar os comandos do bot.`
}

exports.ownersList = (NomeDoBot, numerodono_ofc, dono1, dono2, dono3, dono4, dono5, dono6) => {
return `Lista de proprietários do bot: [ ${NomeDoBot} ]\n\nDono Oficial do Bot: ${numerodono_ofc}\n\n- [ 1 ] ${dono1}\n- [ 2 ] ${dono2}\n- [ 3 ] ${dono3}\n- [ 4 ] ${dono4}\n- [ 5 ] ${dono5}\n- [ 6 ] ${dono6}`
}

exports.speedSabrina = (tempo, sender, r, kyun, uptime, infoSystem) => {
return `${tempo}, Usuário: @${sender.split("@")[0]}\n\n⏱️ *Velocidade de Resposta:* ${String(r.toFixed(3))} _segundos._\n🤖 *O bot se encontra online por:* ${kyun(uptime)}\n💻 *Sistema Operacional:* ${infoSystem.type()}\n📂 *Versão:* ${infoSystem.release()}\n💾 *Memoria RAM total:* ${(infoSystem.totalmem()/Math.pow(1024, 3)).toFixed(2)}GB\n💾 *Memoria RAM disponível:* ${(infoSystem.freemem()/Math.pow(1024, 3)).toFixed(2)}GB`.trim()
}

exports.infoPatente = (tempo, sender, patente, level_up) => {
return `${tempo}, usuário: @${sender.split("@")[0]}, aqui está suas informações de patente e level para saber como está atualmente:\n￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣\n✧ Patente: ${patente} - ✧ Level: ${level_up}`
}

exports.updatePatente = (sender, qnt_msg, patente, level_up) => {
return `✥ Parabéns: @${sender.split("@")[0]}\nVocê upou de level e também de patente por completar ${qnt_msg} mensagens, veja as informações abaixo...\n￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣\n✧ Patente: ${patente} - ✧ Level: ${level_up}`
}

exports.statusBot = (prefix, isAnticall, isAntiPv, isAntiImg, isAntiVid, isAntiAudio, isAntiSticker, isNsfw, Antidoc, isAntiCtt, Antiloc, isAntilinkgp, isAntiLinkHard, isAntifake, isAntiNotas, isAnticatalogo, isPalavrao, isAntiFlood, isWelkom, isWelkom2, isSimi, isSimi2, isAutofigu, isAutorepo, isModobn, isModoAluguel, isLevelingOn) => {
return `*Status de funcionalidades ativaveis para proteger o grupo: 1 você ativa 0 voce desativar*\n\n᯽⊱ Anti Ligação: ${isAnticall ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n   ⊱ ${prefix}antiligacao (1/0)\n\n᯽⊱ Anti PV Block: ${isAntiPv ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n   ⊱ ${prefix}antipv (1/0)\n\n᯽⊱ Anti Imagem: ${isAntiImg ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n   ⊱ ${prefix}antiimg (1/0)\n\n᯽⊱ Anti Vídeo: ${isAntiVid ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n   ⊱ ${prefix}antivídeo (1/0)\n\n᯽⊱ Anti Áudio: ${isAntiAudio? '✓ - Função ativa.' : '✕ - Desativado.'}\n   ⊱ ${prefix}antiaudio (1/0)\n\n᯽⊱ Anti Sticker: ${isAntiSticker ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n   ⊱ ${prefix}antisticker (1/0)\n\n᯽⊱ Anti Documento: ${Antidoc ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n   ⊱ ${prefix}antidoc (1/0)\n\n᯽⊱ Anti Contato ${isAntiCtt ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n   ⊱ ${prefix}antictt (1/0)\n\n᯽⊱ Anti Localização: ${Antiloc ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n   ⊱ ${prefix}Antiloc (1/0)\n\n᯽⊱ Anti Link Grupo: ${isAntilinkgp ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n   ⊱ ${prefix}antilink (1/0)\n\n᯽⊱ Anti Link Hard: ${isAntiLinkHard ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n   ⊱ ${prefix}antilinkhard (1/0)\n\n᯽⊱ Anti Fake: ${isAntifake ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n   ⊱ ${prefix}antifake (1/0)\n\n᯽⊱ Anti Notas: ${isAntiNotas ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n   ⊱ ${prefix}antinotas (1/0)\n\n᯽⊱ Anti Catalogo: ${isAnticatalogo ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n   ⊱ ${prefix}anticatalogo (1/0)\n\n᯽⊱ Anti Palavrão: ${isPalavrao ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n   ⊱ ${prefix}Antipalavra (1/0)\n\n᯽⊱ Limite Caracteres: ${isAntiFlood ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n   ⊱ ${prefix}limitecaracteres (1/0)\n\n᯽⊱ Bem Vindo 1: ${isWelkom ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n   ⊱ ${prefix}Bemvindo (1/0)\n\n᯽⊱ Bem Vindo 2: ${isWelkom2 ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n   ⊱ ${prefix}Bemvindo2 (1/0)\n\n᯽⊱ Simih 1: ${isSimi ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n  ⊱ ${prefix}simih (1/0)\n\n᯽⊱ Simi 2: ${isSimi2 ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n   ⊱ ${prefix}simih2 (1/0)\n\n᯽⊱ Auto Sticker: ${isAutofigu ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n   ⊱ ${prefix}autofigu (1/0)\n\n᯽⊱ Auto Resposta: ${isAutorepo ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n   ⊱ ${prefix}autorepo (1/0)\n\n᯽⊱ Modo Brincadeira: ${isModobn ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n   ⊱ ${prefix}modobrincadeira (1/0)\n\n᯽⊱ Modo Aluguel: ${isModoAluguel ?  '✓ - Função ativa.' : '✕ - Não ativado.'}\n   ⊱ ${prefix}modoaluguel (1/0)\n\n᯽⊱ Modo Nsfw: ${isNsfw ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n   ⊱ ${prefix}nodonsfw (1/0)\n\n᯽⊱ Level ${isLevelingOn ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n\n⊱⋅ ─────────────────── ⋅⊰`

}

exports.errorUploadImage = () => {
return `Ocorreu algum erro, desculpa! O limite do tamanho de vídeo que gero o link, é até 30 segundos.`
}

exports.noArgsSearch = () => {
return `Como deseja realizar uma pesquisa sem conter nenhuma palavra-chave? `
}

exports.syntaxLogos = () => {
return `Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando..`
}

exports.groupInvitation = (sender, cnvt, prefix) => {
return `Foi enviado um convite para o bot entrar neste grupo.\nNúmero dele(a) : wa.me/${sender.split("@")[0]}\n\nLink-Grupo: ${cnvt}\n\nPara me autorizar a entrar no grupo, use o seguinte comando: ${prefix}entrar e o link do grupo enviado em cima.\nExemplo : ${prefix}entrar ${cnvt}\n\nPara recursar ou avisar o usuário que enviou o link que o convite foi recusado, use: ${prefix}recusar e número do usuário.\nExemplo : ${prefix}recusar ${sender.split("@")[0]}`
}

exports.thinkingPrefix = (pushname, prefix) => {
return `Olá ${pushname}, aqui está meu prefixo para uso dos meus comandos: ${prefix}`
}

exports.chamandoBot = (pushname, tempo) => {
const response = [
 `Olá ${pushname}, em que posso ajudar?`, 
 `Olá meu amiguinho(a), tudo bem?`,
 `${tempo} ${pushname}, em que posso ajudar você?`,
 `Por qual motivo você me chamas? 🤔💭`
] 
buffer = response[Math.floor(Math.random() * response.length)]
return buffer 
}

exports.removeUserAntiPlvr = () => {
return `*「 REMOVIDO(A) POR UTILIZAR UMA PALAVRA PROIBIDA 」*\nVocê será banido do grupo, na proxima veja as regras ao digitar qualquer palavra!`
}

exports.permissionDenied_rUser = () => {
return `Infelizmente, não sou um administrador, entt não posso te banir!`
}

exports.antisRandomMessage = () => {
return `Uma dessas opções estão ativada, mas por você ser adm, não será removido(a) _(ANTI CONTATO - ANTI CATALOGO - ANTI LOCALIZAÇÃO)_`
}

exports.charactersAnti = () => {
return `Muitos caracteres enviados, isto é contra as normas do grupo, por precaução, eu irei remover.`
}

exports.markingAllMember = () => {
return `*O participante foi removido do grupo* - Motivo: Membro comum com mensagem de marcação de todos do grupo, por conta disso irei remover do grupo, qualquer coisa entre em contato com um administrador...`
}

exports.absenceRecordOwner = (NickDono, tabelin) => {
return `Olá, o meu proprietário "${NickDono}" se encontra ausente no momento.\n↺Desde do Horário: ${tabelin.Ausente_Desde}\n\n☇ Mensagem de Ausência: ${tabelin.Motivo_Da_Ausência}`
}

exports.absenceRecordAdmin = (blak) => {
return `⊱⋅ ─────────────────── ⋅⊰\n\n᯽⊱ Opa esse adm vs dono @${blak.id.split("@")[0]} se encontra ausente no momento!\n\n᯽⊱ Mensagem de ausente: ${blak.msg}!\n\n⊱⋅ ─────────────────── ⋅⊰`
}

exports.aluguelMessageActivated = (pushname) => {
return `Olá *${pushname}*, meu proprietário ativou o modo aluguel, ou seja, os comandos não estão liberados aqui. Somente com a autorização dele eu posso responder comandos dados pela administração ou participantes deste grupo / comunidade.`
}

exports.userMutedGroup = () => {
return `🐤😡 *Você deu um piu?* - Agora prepare-se para o seu julgamento!`
}

exports.floodCommands = () => {
return `Espere *5s* para usar outro comando ou executar o mesmo...`
}

exports.timeRequired = () => {
return `Não é possível realizar download de áudios ou vídeos acima de *20 minutos*.`
}

exports.error = () => {
return `Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`
}

exports.messageProhibitedDetAdmin = () => {
return `Mensagem proibida detectada, porém é admin logo a punição será anulada.`
}

exports.messageProhibitedDetUser = () => {
return `Mensagem proibida detectada, banindo o infrator...`
}

exports.antiPrivateBlock = () => {
return `Olá amigo(a), o *anti pv* está ativo no momento, ou seja, estou recebendo as ordens de bloquear os usuários que entrar em contato comigo no privado.`
}

exports.antiPrivateNoBlock = () => {
return `Olá, sou uma inteligência artificial, programado(a) para realizar ações, por adms e o dono, se você está enviando mensagem, provavelmente você não sabe disso, eu removo diariamente pessoas por enviar links e muito mais...`
}

exports.antiCalls = () => {
return `Olá amigo, o anti ligar está ativo no momento, ou seja, estou recebendo as ordens de bloquear aqueles que efetuarem ligações para mim.`
}