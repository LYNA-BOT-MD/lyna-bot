const configbot = (prefix) => {
return `COMO CONFIGURAR O BOT, PRA SER DONO

Primeiro ligue o bot no termux, e vá para o WhatsApp do bot em algum privado, utilize os seguintes comandos.
*Obs:* Pode por letras modificadas também se você quiser!

⏣ *1- Para alterar o nome do bot, use o seguinte comando:*
➣ ${prefix}Nome-bot Nome que deseja colocar em seu bot

⏣ *2- Para alterar o nick do dono do bot, use o seguinte comando:*
➣  ${prefix}Nick-dono Seu nick aqui
  
⏣ *3- Configure o número do dono, com o seguinte comando:*
➣ ${prefix}numero-dono 559999999999
*Obs:* O número tem que ser junto, e não pode conter o símbolo de + nem - e não pode ter o 9 da operadora, tem que ser o número idêntico ao seu do whatsapp.
  
⏣ 4- *Configure o prefixo que você deseja no bot, usando o seguinte comando:*
➣  ${prefix}prefixo-bot #
*Obs:* Pode por qualquer símbolo, se o seu símbolo for ${prefix} ele vai passar a ser # de acordo com o que você mudou.

Boa sorte, se for utilizar o bot na plataforma heroku, configure antes de enviar pra lá, pois o heroku não armazena dados, qualquer função que for ativar em grupos, deve esta no termux, antes de lançar pro heroku.`
}

exports.configbot = configbot