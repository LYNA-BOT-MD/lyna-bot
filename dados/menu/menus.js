const menu = (prefix, NomeDoBot, sender) => {  
return `
╭━═══════════════════⊷
┃╭───────•◈•───────╮
┃├「❓ CMD INFO ❓️」
┃┆╭───────•◈•───────╮
┃┆├➢ ${prefix}regras
┃┆├➢ ${prefix}blocklist
┃┆├➢ ${prefix}inativos (adm)
┃┆├➢ ${prefix}listabr (adm)
┃┆├➢ ${prefix}listaddi (adm)
┃┆├➢ ${prefix}listaddd (adm)
┃┆├➢ ${prefix}checkativo (@)
┃┆├➢ ${prefix}ranklevel (adm)
┃┆├➢ ${prefix}rankativo (adm)
┃┆├➢ ${prefix}atividades (adm)
┃┆╰───────•◈•───────╯
┃╭「🤼 CMD MEMBROS 🤼 」
┃┆╭───────•◈•───────╮ 
┃┆├➢ ${prefix}cepy
┃┆├➢ ${prefix}sip
┃┆├➢ ${prefix}ddd
┃┆├➢ ${prefix}ping
┃┆├➢ ${prefix}saldo
┃┆├➢ ${prefix}dono
┃┆├➢ ${prefix}linkgp
┃┆├➢ ${prefix}sender
┃┆├➢ ${prefix}gerarcpf
┃┆├➢ ${prefix}Bug (txt)
┃┆├➢ ${prefix}cotacao
┃┆├➢ ${prefix}memes
┃┆├➢ ${prefix}gimage
┃┆├➢ ${prefix}idiomas
┃┆├➢ ${prefix}metadinha
┃┆├➢ ${prefix}signo (txt)
┃┆├➢ ${prefix}sugestao (txt)
┃┆├➢ ${prefix}Infocmd (cmd)
┃┆├➢ ${prefix}encurtalink (link)
┃╰───────•◈•───────╯
┃╭「🎵 CMD DOWNLOAD 🎵」
┃┆╭───────•◈•───────╮
┃┆├➢ ${prefix}play (nome)
┃┆├➢ ${prefix}play2 (nome)
┃┆├➢ ${prefix}play3 (nome)
┃┆├➢ ${prefix}playdoc (nome)
┃┆├➢ ${prefix}playmp4 (nome)
┃┆├➢ ${prefix}amazon (nome)
┃┆├➢ ${prefix}Kwai (Link)
┃┆├➢ ${prefix}download-url
┃┆├➢ ${prefix}spotify (Link)
┃┆├➢ ${prefix}instagram (Link)
┃┆├➢ ${prefix}face_video (Link)
┃┆├➢ ${prefix}face_audio (Link)
┃┆├➢ ${prefix}tiktok_video (Link)
┃┆├➢ ${prefix}tiktok_audio (Link)
┃┆├➢ ${prefix}twitter_video (Link)
┃┆├➢ ${prefix}twitter_audio (Link)
┃┆├➢ ${prefix}insta_audio (Link)
┃┆├➢ ${prefix}mediafire (Link)
┃┆├➢ ${prefix}baixar (Link ytb)
┃┆├➢ ${prefix}Imgpralink (img)
┃┆├➢ ${prefix}Videopralink (vid)
┃╰───────•◈•───────╯
┃├ 「🧧 CMD STICKER 🧧」
┃┆╭───────•◈•───────╮
┃┆├➢ ${prefix}rbale
┃┆├➢ ${prefix}s (foto)
┃┆├➢ ${prefix}f (foto)
┃┆├➢ ${prefix}qc (txt)
┃┆├➢ ${prefix}togif (fig)
┃┆├➢ ${prefix}attp (txt)
┃┆├➢ ${prefix}attp2 (txt)
┃┆├➢ ${prefix}qc (txt)
┃┆├➢ ${prefix}sticker (foto)
┃┆├➢ ${prefix}toimg (sticker)
┃┆├➢ ${prefix}togif (sticker)
┃┆├➢ ${prefix}figfundo (img)
┃┆├➢ ${prefix}sFoto (img)
┃┆├➢ ${prefix}sticker (foto)
┃┆├➢ ${prefix}rename (txt/txt)
┃┆╰───────•◈•───────╯
┃├「🔎 CMD PESQUISA 🔎」
┃┆╭───────•◈•───────╮
┃┆├➢ ${prefix}clima (cidade)
┃┆├➢ ${prefix}movie (nome)
┃┆├➢ ${prefix}googlenews
┃┆├➢ ${prefix}wikipedia (nome) 
┃┆├➢ ${prefix}pinterest (nome)
┃┆├➢ ${prefix}ytsearch (nome) 
┃┆├➢ ${prefix}playstore (nome)
┃┆├➢ ${prefix}pesquisa2 (nome)
┃┆├➢ ${prefix}esportenoticias
┃┆╰───────•◈•───────╯
┃╭「🕵‍ CMD INTELI.. 🕵‍」
┃┆╭───────•◈•───────╮ 
┃┆├➢ ${prefix}tabela
┃┆├➢ ${prefix}tagme
┃┆├➢ ${prefix}perfil
┃┆├➢ ${prefix}fatos
┃┆├➢ ${prefix}cantadas
┃┆├➢ ${prefix}simi (txt)
┃┆├➢ ${prefix}ptvmsg (Vi)
┃┆├➢ ${prefix}serie (nome)
┃┆├➢ ${prefix}notícias (txt)
┃┆├➢ ${prefix}imgpraanime
┃┆├➢ ${prefix}totext (Audio)
┃┆├➢ ${prefix}celular (nome)
┃┆├➢ ${prefix}gtts pt (nome)
┃┆├➢ ${prefix}games (nome) 
┃┆├➢ ${prefix}redacao (tema) 
┃┆├➢ ${prefix}gerargp (nome)
┃┆├➢ ${prefix}calcular (10+10)
┃┆├➢ ${prefix}emojimix 😅+🤔
┃┆├➢ ${prefix}emoji2 😅+🤔
┃┆├➢ ${prefix}Conselhobiblico
┃┆╰───────•◈•───────╯
┃╰────────•◈•
╰══════════════════ ⪨`;};
exports.menu = menu;
const adms = (prefix, sender) => { 
return `╭━═══════════════════⊷
┃╭「👥️ CMD ADMS 👥️」
┃┆╭───────•◈•───────╮
┃┆├➢ ${prefix}Antiimg (1/0)
┃┆├➢ ${prefix}Antivideo (1/0)
┃┆├➢ ${prefix}Antiaudio (1/0)
┃┆├➢ ${prefix}Antisticker (1/0)
┃┆├➢ ${prefix}Antiloc (1/0)
┃┆├➢ ${prefix}Anticontato (1/0)
┃┆├➢ ${prefix}Antidoc (1/0)
┃┆├➢ ${prefix}Antilinkgp (1/0)
┃┆├➢ ${prefix}Antilinkhard (1/0)
┃┆├➢ ${prefix}Antifake (1/0)
┃┆├➢ ${prefix}Antinotas (1/0)
┃┆├➢ ${prefix}Anticatalogo (1/0)
┃┆├➢ ${prefix}Antipalavrao (1/0)
┃┆├➢ ${prefix}Limitecaracteres (1/0)
┃┆├➢ ${prefix}Bemvindo (1/0)
┃┆├➢ ${prefix}Bemvindo2 (1/0)
┃┆├➢ ${prefix}Simih (1/0)
┃┆├➢ ${prefix}Simih2 (1/0)
┃┆├➢ ${prefix}Autosticker (1/0)
┃┆├➢ ${prefix}Autorepo (1/0)
┃┆├➢ ${prefix}Leveling (1/0)
┃┆├➢ ${prefix}Modonsfw (1/0)
┃┆├➢ ${prefix}Odelete (1/0)
┃┆├➢ ${prefix}x9visuunica (1/0)
┃┆├➢ ${prefix}x9 (1/0)​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
┃┆├➢ ${prefix}modobrincadeira (1/0)
┃┆├➢ ${prefix}legenda_documento
┃┆├➢ ${prefix}addautorm
┃┆├➢ ${prefix}sorteionumero
┃┆├➢ ${prefix}sorteio
┃┆├➢ ${prefix}autobang
┃┆├➢ ${prefix}delremover
┃┆├➢ ${prefix}listban
┃┆├➢ ${prefix}anotar
┃┆├➢ ${prefix}roletarussa
┃┆├➢ ${prefix}Legenda_imagem (Texto)
┃┆├➢ ${prefix}Legenda_video (Texto)
┃┆├➢ ${prefix}Legenda_estrangeiro (Texto)
┃┆├➢ ${prefix}Legendabv (Texto)
┃┆├➢ ${prefix}Legendasaiu (Texto)
┃┆├➢ ${prefix}Legendabv2 (Texto)
┃┆├➢ ${prefix}Legendasaiu2 (Texto)
┃┆├➢ ${prefix}So_adm
┃┆├➢ ${prefix}Requestgp -list
┃┆├➢ ${prefix}Requestgp -a numero
┃┆├➢ ${prefix}Requestgp -r numero
┃┆├➢ ${prefix}Fechar-gp
┃┆├➢ ${prefix}Listanegra (Número)
┃┆├➢ ${prefix}Tirardalista (Número)
┃┆├➢ ${prefix}ListanegraG (Número)
┃┆├➢ ${prefix}TirardalistaG (Número)
┃┆├➢ ${prefix}Multiprefixo (1/0)
┃┆├➢ ${prefix}Add_prefixo
┃┆├➢ ${prefix}Tirar_prefixo
┃┆├➢ ${prefix}Banghost
┃┆├➢ ${prefix}Mute (@mencionar)
┃┆├➢ ${prefix}Desmute (@mencionar)
┃┆├➢ ${prefix}Add 5511.. (Para-adicionar)
┃┆├➢ ${prefix}Reviver (Responder-mensagem)
┃┆├➢ ${prefix}Kick [@] (Para-remover)
┃┆├➢ ${prefix}Ban (Responder-mensagem)
┃┆├➢ ${prefix}Promover [@] (Ser-admin)
┃┆├➢ ${prefix}Rebaixar [@] (Rebaixar-adm)
┃┆├➢ ${prefix}Changegroup (all/adms)
┃┆├➢ ${prefix}Rmphotogp (Remover ft do gp)
┃┆├➢ ${prefix}Ephemeral [1/0] (Msg-temp)
┃┆├➢ ${prefix}Descgp (Texto)
┃┆├➢ ${prefix}Nomegp (Nome)
┃┆├➢ ${prefix}Totag (Mencionar algo)
┃┆├➢ ${prefix}Grupo (f/a)
┃┆├➢ ${prefix}Status
┃┆├➢ ${prefix}Limpar (texto-invisível-gp)
┃┆├➢ ${prefix}Atividades (DO-GRUPO)
┃┆├➢ ${prefix}Linkgp
┃┆├➢ ${prefix}Grupoinfo
┃┆├➢ ${prefix}Hidetag (txt) (marcação)
┃┆├➢ ${prefix}Marcar (marca tds do gp)
┃┆├➢ ${prefix}Marcar2 (Marca-tds-wa.me)
┃┆├➢ ${prefix}Anagrama (1/0)
┃┆├➢ ${prefix}Antipalavra (1/0)
┃┆├➢ ${prefix}Criartabela (Escreva-algo)
┃┆├➢ ${prefix}Tabelagp (Veja a tabela)
┃┆╰───────•◈•───────╯
┃╰────────•◈•
╰══════════════════ ⪨`;};
exports.adms = adms;

const menudono = (prefix, sender) => {
return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭━═══════════════════⊷
┃╭「🤖 CMD DONO 🤖️」
┃┆╭───────•◈•───────╮
┃┆├➢ ${prefix}Bangp
┃┆├➢ ${prefix}Unbangp
┃┆├➢ ${prefix}cases 
┃┆├➢ ${prefix}arquivargp
┃┆├➢ ${prefix}substituir
┃┆├➢ ${prefix}puxarcase
┃┆├➢ ${prefix}limitec_global
┃┆├➢ ${prefix}tirar_docnt
┃┆├➢ ${prefix}anotacao
┃┆├➢ ${prefix}limpar_mortos-cnt
┃┆├➢ ${prefix}Fotomenu (Marcar-img)
┃┆├➢ ${prefix}Blockcmd (cmd)
┃┆├➢ ${prefix}Unblockcmd (cmd)
┃┆├➢ ${prefix}Cmdpremlist
┃┆├➢ ${prefix}Addcmdprem (cmd)
┃┆├➢ ${prefix}Delcmdprem (cmd)
┃┆├➢ ${prefix}Fundobemvindo (marcar-img)
┃┆├➢ ${prefix}Fundosaiu (marcar-img)
┃┆├➢ ${prefix}Serpremium
┃┆├➢ ${prefix}Listagp
┃┆├➢ ${prefix}Antipalavrão (1/0)
┃┆├➢ ${prefix}Antiligar (1/0)
┃┆├➢ ${prefix}Modoaluguel (1/0)
┃┆├➢ ${prefix}Fazertm (Texto)
┃┆├➢ ${prefix}Rgtm
┃┆├➢ ${prefix}Tirardatm
┃┆├➢ ${prefix}Listatm
┃┆├➢ ${prefix}Infocmd_add (cmd/texto)
┃┆├➢ ${prefix}Infocmd_del (cmd)
┃┆├➢ ${prefix}Visualizarmsg
┃┆├➢ ${prefix}legendafake (txt)
┃┆├➢ ${prefix}Console (Logs no terminal)
┃┆├➢ ${prefix}Botoff (Funcionalidade do bot)
┃┆├➢ ${prefix}Boton (Funcionalidade do bot)
┃┆├➢ ${prefix}Verificado-global (Selos)
┃┆├➢ ${prefix}Audio-menu (Audio do menu)
┃┆├➢ ${prefix}Addpalavra (palavrão)
┃┆├➢ ${prefix}Delpalavra (palavrão)
┃┆├➢ ${prefix}Ativo
┃┆├➢ ${prefix}Rmpalavra_forca (palavra)
┃┆├➢ ${prefix}Addpalavras_forca (titulo|tema|dica)
┃┆├➢ ${prefix}Ausente (fale-oq-faz)
┃┆├➢ ${prefix}Delpremium @(marca)
┃┆├➢ ${prefix}Addpremium @(marca)
┃┆├➢ ${prefix}Privphotobot (all/cntt/ngm)
┃┆├➢ ${prefix}Privaddgroup (all/cntt/ngm)
┃┆├➢ ${prefix}Descriçãogp (digite-algo)
┃┆├➢ ${prefix}Block [@] (bloq de usar cmds)
┃┆├➢ ${prefix}Unblock [@] (desbloquear)
┃┆├➢ ${prefix}Setprefix (prefixo-novo)
┃┆├➢ ${prefix}Bcgp (TM-PRA-PV-MEMBROS)
┃┆╰───────•◈•───────╯
┃╰────────•◈•
╰══════════════════ ⪨`;};
exports.menudono = menudono;

const menulogos = (prefix, sender) => {
return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭━═══════════════════⊷
┃╭「👥️CMD LOGOS 👥️」
┃┆╭───────•◈•───────╮​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
┃┆├➢ ${prefix}Cria (Texto) 
┃┆├➢ ${prefix}Anime1 (Texto)
┃┆├➢ ${prefix}Anime2 (Texto)
┃┆├➢ ${prefix}Ff1 (Texto)
┃┆├➢ ${prefix}Ff2 (Texto)
┃┆├➢ ${prefix}Game (Texto)
┃┆├➢ ${prefix}Entardecer (Texto)
┃┆├➢ ${prefix}Indian (Texto)
┃┆├➢ ${prefix}Ffrose (Texto)
┃┆├➢ ${prefix}Ffgren (Texto)
┃┆├➢ ${prefix}Chufuyu (Texto)
┃┆├➢ ${prefix}Wolf (Texto)
┃┆├➢ ${prefix}avatar (txt)
┃┆├➢ ${prefix}googlesg (txt)
┃┆├➢ ${prefix}marvel (txt) 
┃┆├➢ ${prefix}stone (txt)   
┃┆├➢ ${prefix}space (txt)
┃┆├➢ ${prefix}pornhub (txt)
┃┆├➢ ${prefix}america (txt)   
┃┆├➢ ${prefix}steel (txt)  
┃┆├➢ ${prefix}grafity (txt)  
┃┆├➢ ${prefix}glitch3 (txt)
┃┆├➢ ${prefix}thorstyle (txt)  
┃┆├➢ ${prefix}lava (txt)
┃┆├➢ ${prefix}toxic (txt)  
┃┆├➢ ${prefix}thunder (txt) 
┃┆├➢ ${prefix}thunderv2 (txt)  
┃┆├➢ ${prefix}neongreen (txt)	
┃┆├➢ ${prefix}neon (txt)  
┃┆├➢ ${prefix}neon1 (txt)  
┃┆├➢ ${prefix}neon3d (txt)  
┃┆├➢ ${prefix}demongreen (txt)   
┃┆├➢ ${prefix}metalfire (txt)  
┃┆├➢ ${prefix}rainbow (txt)	  
┃┆├➢ ${prefix}gelo (txt)
┃┆├➢ ${prefix}halloween (txt)  
┃┆├➢ ${prefix}lapis (txt)  
┃┆├➢ ${prefix}glitch (txt)  
┃┆├➢ ${prefix}glitch2 (txt)   
┃┆├➢ ${prefix}3dgold (txt) 
┃┆├➢ ${prefix}neon3d (txt)   
┃┆├➢ ${prefix}transformer (txt)  
┃┆├➢ ${prefix}3dstone (txt)
┃┆├➢ ${prefix}fiction (txt)
┃┆├➢ ${prefix}cattxt (txt)
┃┆├➢ ${prefix}neondevil (txt)
┃┆├➢ ${prefix}demonfire (txt)
┃┆├➢ ${prefix}colaq (txt)
┃┆├➢ ${prefix}luxury (txt)
┃┆├➢ ${prefix}berry (txt)
┃┆├➢ ${prefix}matrix (txt)
┃┆├➢ ${prefix}horror (txt)
┃┆├➢ ${prefix}nuvem (txt)
┃┆├➢ ${prefix}neon3 (txt)
┃┆├➢ ${prefix}neve (txt)
┃┆├➢ ${prefix}areia (txt)
┃┆├➢ ${prefix}vidro (txt)
┃┆├➢ ${prefix}style (txt)
┃┆├➢ ${prefix}blood (txt)
┃┆├➢ ${prefix}pink (txt)
┃┆├➢ ${prefix}carbon (txt)
┃┆├➢ ${prefix}metalblue (txt) 
┃┆├➢ ${prefix}jeans (txt)  
┃┆├➢ ${prefix}jokerlogo (txt)   
┃┆├➢ ${prefix}natal (txt) 
┃┆├➢ ${prefix}ossos (txt)  
┃┆├➢ ${prefix}asfalto (txt)	
┃┆├➢ ${prefix}3ddragon (txt)
┃┆├➢ ${prefix}esmeralda (txt)
┃┆├➢ ${prefix}break (txt)  
┃┆├➢ ${prefix}hologram (txt)  
┃┆├➢ ${prefix}deepsea (txt)
┃┆├➢ ${prefix}narutologo2 (txt)
┃┆├➢ ${prefix}logoneon (txt)
┃┆├➢ ${prefix}orangejuice (txt)
┃┆├➢ ${prefix}Dragonred (Texto)
┃┆├➢ ${prefix}fpsmascote (Nome)
┃┆├➢ ${prefix}equipemascote (Nome)
┃┆├➢ ${prefix}logogame (Nome)
┃┆├➢ ${prefix}txtquadrinhos (Nome)
┃┆├➢ ${prefix}ffavatar (Nome)
┃┆├➢ ${prefix}gizquadro (Nome)
┃┆├➢ ${prefix}metalgold (Nome)
┃┆├➢ ${prefix}shadow (Nome)
┃┆├➢ ${prefix}cup (Nome)
┃┆├➢ ${prefix}txtborboleta (Nome)
┃┆├➢ ${prefix}cemiterio (Nome)
┃┆├➢ ${prefix}efeitoneon (Nome)
┃┆├➢ ${prefix}harryp (Nome)
┃┆├➢ ${prefix}coffecup (Nome)
┃┆├➢ ${prefix}coffecup2 (Nome)
┃┆├➢ ${prefix}florwooden (Nome)
┃┆├➢ ${prefix}narutologo (Nome)
┃┆├➢ ${prefix}fire (Nome)
┃┆├➢ ${prefix}romantic (Nome)
┃┆├➢ ${prefix}smoke (Nome)
┃┆├➢ ${prefix}papel (Nome)
┃┆├➢ ${prefix}lovemsg (Nome)
┃┆├➢ ${prefix}lovemsg2 (Nome)
┃┆├➢ ${prefix}angelwing (Nome)
┃┆├➢ ${prefix}lovemsg3 (Nome)
┃┆├➢ ${prefix}neon2 (Nome)
┃┆├➢ ${prefix}lobometal (Nome)
┃┆├➢ ${prefix}blackpink (Nome)
┃┆├➢ ${prefix}girlmascote (Nome)
┃┆├➢ ${prefix}hackneon (Nome)
┃┆├➢ ${prefix}mascotegame (Nome)
┃┆├➢ ${prefix}wingeffect (Nome)
┃┆├➢ ${prefix}angelglx (Nome)
┃┆╰───────•◈•───────╯
┃╰────────•◈•
╰══════════════════ ⪨`;};
exports.menulogos = menulogos;

const alteradores = (prefix, sender) => {
return`​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭━═══════════════════⊷
┃╭「👀 CMD ALTERADO 👀」
┃┆╭───────•◈•───────╮​​​​
┃┆├➢ ${prefix}Videolento (marca)
┃┆├➢ ${prefix}Videorapido (marca)
┃┆├➢ ${prefix}Videocontrario (marca)
┃┆├➢ ${prefix}Audiolento (marca)
┃┆├➢ ${prefix}Audiorapido (marca)
┃┆├➢ ${prefix}Grave (marca)
┃┆├➢ ${prefix}Grave2 (marca)
┃┆├➢ ${prefix}Esquilo (marca)
┃┆├➢ ${prefix}Estourar (marca)
┃┆├➢ ${prefix}Bass (marca)
┃┆├➢ ${prefix}Bass2 (marca)
┃┆├➢ ${prefix}Vozmenino (marca)
┃┆╰───────•◈•───────╯
┃╰────────•◈•
╰══════════════════ ⪨`;};
exports.alteradores = alteradores;

const brincadeiras = (prefix, sender) => {
return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭━═══════════════════⊷
┃╭「🤪 CMD BRINCADEIRA 🤪」
┃┆╭───────•◈•───────╮​​​​
┃┆├➢ ${prefix}Gay (@)
┃┆├➢ ${prefix}Feio (@)
┃┆├➢ ${prefix}Corno (@)
┃┆├➢ ${prefix}Vesgo (@)
┃┆├➢ ${prefix}tapa (@)
┃┆├➢ ${prefix}steal (@) 
┃┆├➢ ${prefix}Matar (@)
┃┆├➢ ${prefix}Bebado (@)
┃┆├➢ ${prefix}chutex (@)
┃┆├➢ ${prefix}nazista (@)
┃┆├➢ ${prefix}Dogolpe (@)
┃┆├➢ ${prefix}Gostoso (@)
┃┆├➢ ${prefix}Gostosa (@)
┃┆├➢ ${prefix}Casal
┃┆├➢ ${prefix}Cassino
┃┆├➢ ${prefix}Rankgay
┃┆├➢ ${prefix}Rankpaul
┃┆├➢ ${prefix}Rankgado
┃┆├➢ ${prefix}Mencionar
┃┆├➢ ${prefix}Rankcorno
┃┆├➢ ${prefix}Rankotakus
┃┆├➢ ${prefix}Ranknazistal
┃┆├➢ ${prefix}Jogodaforca
┃┆├➢ ${prefix}Rankgostoso
┃┆├➢ ${prefix}Ppt (pedra) 
┃┆├➢ ${prefix}surubao (?)
┃┆├➢ ${prefix}Quando (txt) 
┃┆├➢ ${prefix}chance (txt)
┃┆├➢ ${prefix}Death (Nome)
┃┆├➢ ${prefix}R-forca (Letra)
┃┆├➢ ${prefix}Resetforca (adm)
┃┆├➢ ${prefix}Gartic (1/0)
┃┆├➢ ${prefix}Enigma (1/0)
┃┆├➢ ${prefix}Anagrama (1/0)
┃┆╰───────•◈•───────╯
┃╰────────•◈•
╰══════════════════ ⪨`;};
exports.brincadeiras = brincadeiras;


const efeitos = (prefix, sender) => {
return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​╭━═══════════════════⊷
┃╭「🤪 CMD EFEITOS 🤪」
┃┆╭───────•◈•───────╮​​​​​​
┃┆├➢ ${prefix}comunismo (img)
┃┆├➢ ${prefix}bolsonaro (img)
┃┆├➢ ${prefix}bnw (img)
┃┆├➢ ${prefix}beautiful (img)
┃┆├➢ ${prefix}blur (img)
┃┆├➢ ${prefix}affect (img)
┃┆├➢ ${prefix}del (img)
┃┆├➢ ${prefix}circle (img)
┃┆├➢ ${prefix}dither (img)
┃┆├➢ ${prefix}facepalm (img)
┃┆├➢ ${prefix}invert (img)
┃┆├➢ ${prefix}magik (img)
┃┆├➢ ${prefix}rotate (img)
┃┆├➢ ${prefix}rip (img)
┃┆├➢ ${prefix}jail (img)
┃┆├➢ ${prefix}trash (img)
┃┆├➢ ${prefix}pixelate (img)
┃┆├➢ ${prefix}sepia (img)
┃┆├➢ ${prefix}wanted (img)
┃┆├➢ ${prefix}karaba (img)
┃┆├➢ ${prefix}lixo (img)
┃┆├➢ ${prefix}lgbt (img)
┃┆├➢ ${prefix}morto (img)
┃┆├➢ ${prefix}preso (img)
┃┆├➢ ${prefix}deletem (img)
┃┆├➢ ${prefix}procurado (img)
┃┆├➢ ${prefix}hitler (img)
┃┆├➢ ${prefix}borrar (img)
┃┆├➢ ${prefix}merda (img)​​​​​​​​​​​​​​​​​​​​
┃┆├➢ ${prefix}Lgbt (img)
┃┆├➢ ${prefix}Wasted  (img)
┃┆├➢ ${prefix}Animeia (img)
┃┆╰───────•◈•───────╯
┃╰────────•◈•
╰══════════════════ ⪨`;};
exports.efeitos = efeitos;
