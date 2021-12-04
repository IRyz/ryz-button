const discord = require('discord.js');
const client = new discord.Client();
const disbut = require('discord-buttons')(client);

let config = {
"vk": "", // Koymak İstediğiniz Rolun İd. Si
"dc": "", // Koymak İstediğiniz Rolun İd. Si
"gartic": "", // Koymak İstediğiniz Rolun İd. Si
"lovers":"", // Koymak İstediğiniz Rolun İd. Si
"alone":"", // Koymak İstediğiniz Rolun İd. Si
"manitayapmiom":"", // Koymak İstediğiniz Rolun İd. Si
"cekiliskatilimcisi":"", // Koymak İstediğiniz Rolun İd. Si
"etkinlikkatilimcisi":"", // Koymak İstediğiniz Rolun İd. Si
"filmizleyicisi":"", // Koymak İstediğiniz Rolun İd. Si
"csgo":"", // Koymak İstediğiniz Rolun İd. Si
"lol":"", // Koymak İstediğiniz Rolun İd. Si
"mc":"", // Koymak İstediğiniz Rolun İd. Si
"valo":"", // Koymak İstediğiniz Rolun İd. Si
"pubg":"", // Koymak İstediğiniz Rolun İd. Si
"botOwner": "", // Bot Owned İd Si
"token": "" // Botun Tokeni.
};

client.on("message", async (message) => {
    const args = message.content.split(" ");
    const command = args.shift();
    if (command === "!eg" && "483287971794124810" == message.author.id) {
    let vk = new disbut.MessageButton().setStyle('green').setLabel('Vampir Köylü!').setID('vk')
    let dc = new disbut.MessageButton().setStyle('red').setLabel('Doğruluk / Cesaretlik!').setID('dc')
    let grt = new disbut.MessageButton().setStyle("gray").setLabel('Gartic!').setID('gartic')
    message.channel.send('Aşağıdaki menüden kendinize oyun seçebilirsiniz. Bir oyunun rolünü almak için o butona tıklayın.', {
        buttons: [vk, dc, grt]
    });
}
});

client.on('clickButton', async (button) => {
    if (button.id === 'vk') {
        if (button.clicker.member.roles.cache.get(config.vk)) {
            await button.clicker.member.roles.remove(config.vk);await button.think(true);await button.reply.edit("Vampir Köylü rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.vk);await button.think(true);await button.reply.edit("Vampir Köylü rolü üzerinize verildi.")
        }
    }
    if (button.id === 'dc') {
        if (button.clicker.member.roles.cache.get(config.dc)) {
            await button.clicker.member.roles.remove(config.dc);await button.think(true);await button.reply.edit("Doğruluk Cesaret rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.dc);await button.think(true);await button.reply.edit("Doğruluk Cesaret rolü üzerinize verildi.")
        }

    }
    if (button.id === 'gartic') {
        if (button.clicker.member.roles.cache.get(config.gartic)) {
            await button.clicker.member.roles.remove(config.gartic);await button.think(true);await button.reply.edit("Gartic.İO rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.gartic);await button.think(true);await button.reply.edit("Gartic rolü üzerinize verildi.")
        }

    }

});

//-----------------------------------------------------------------------------------------//

client.on("message", async (message) => {
    const args = message.content.split(" ");
    const command = args.shift();
    if (command === "!ilişki" && "483287971794124810" == message.author.id) {
    let iv = new disbut.MessageButton().setStyle('green').setLabel('İlişkim Var').setID('iv')
    let iy = new disbut.MessageButton().setStyle('red').setLabel('İlişkim Yok').setID('iy')
    let sy = new disbut.MessageButton().setStyle("gray").setLabel('Sevgili Yapmıyorum').setID('sy')
    message.channel.send('İlişki durumunuzu aşağıdaki butonlardan seçebilirsiniz.', {
        buttons: [iv, iy, sy]
    });
}
});

client.on('clickButton', async (button) => {
    if (button.id === 'iv') {
        if (button.clicker.member.roles.cache.get(config.lovers)) {
            await button.clicker.member.roles.remove(config.lovers);await button.think(true);await button.reply.edit("İlişkim Var rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.lovers);await button.think(true);await button.reply.edit("İlişkim Var rolü üzerinize verildi.")
        }
    }
    if (button.id === 'iy') {
        if (button.clicker.member.roles.cache.get(config.dc)) {
            await button.clicker.member.roles.remove(config.dc);await button.think(true);await button.reply.edit("İlişkim Yok rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.dc);await button.think(true);await button.reply.edit("İlişkim Yok rolü üzerinize verildi.")
        }

    }
    if (button.id === 'sy') {
        if (button.clicker.member.roles.cache.get(config.gartic)) {
            await button.clicker.member.roles.remove(config.gartic);await button.think(true);await button.reply.edit("Sevgili Yapmıyorum rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.gartic);await button.think(true);await button.reply.edit("Sevgili Yapmıyorum rolü üzerinize verildi.")
        }

    }

});


//---------------------------------------------------------------------------------------------//



client.on("message", async (message) => {
    const args = message.content.split(" ");
    const command = args.shift();
    if (command === "!et" && "483287971794124810" == message.author.id) {
    let çk = new disbut.MessageButton().setStyle('red').setLabel('Çekiliş Katılımcısı').setID('çk')
    let ek = new disbut.MessageButton().setStyle('red').setLabel('Etkinlik Katılımcısı').setID('ek')
    let fi = new disbut.MessageButton().setStyle("red").setLabel('Film İzleyicisi').setID('fi')
    message.channel.send('Merhaba Sunucu üyeleri,\nÇekiliş katılımcısı alarak Nitro,Spotify,Exxen gibi çeşitli ödüllerin sahibi olabilirsiniz.\nEtkinlik katılımcısı alarak çeşitli etkinliklerin yapıldığı anlarda herkesten önce haberdar olabilirsiniz ve çekilişlere önceden katılma hakkı kazanabilirsiniz.\nFilm izleyicisi alarak çeşitli film etkinliklerin yapıldığı anlarda herkesten önce haberdar olabilirsiniz ve çekilişlere önceden katılma hakkı kazanabilirsiniz.\n**Aşağıdaki butonlara basarak siz de bu ödülleri kazanmaya hemen başlayabilirsiniz!**', {
        buttons: [çk, ek, fi]
    });
}
});

client.on('clickButton', async (button) => {
    if (button.id === 'çk') {
        if (button.clicker.member.roles.cache.get(config.cekiliskatilimcisi)) {
            await button.clicker.member.roles.remove(config.cekiliskatilimcisi);await button.think(true);await button.reply.edit("Çekiliş Katılımcısı rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.cekiliskatilimcisi);await button.think(true);await button.reply.edit("Çekiliş Katılımcısı rolü üzerinize verildi.")
        }
    }
    if (button.id === 'ek') {
        if (button.clicker.member.roles.cache.get(config.etkinlikkatilimcisi)) {
            await button.clicker.member.roles.remove(config.etkinlikkatilimcisi);await button.think(true);await button.reply.edit("Etkinlik Katılımcısı rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.etkinlikkatilimcisi);await button.think(true);await button.reply.edit("Etkinlik Katılımcısı rolü üzerinize verildi.")
        }

    }
    if (button.id === 'fi') {
        if (button.clicker.member.roles.cache.get(config.filmizleyicisi)) {
            await button.clicker.member.roles.remove(config.filmizleyicisi);await button.think(true);await button.reply.edit("Film İzleyicisi rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.filmizleyicisi);await button.think(true);await button.reply.edit("Film İzleyicisi rolü üzerinize verildi.")
        }

    }

});

//---------------------------------------------------------------------------------------------//

client.on("message", async (message) => {
    const args = message.content.split(" ");
    const command = args.shift();
    if (command === "!oyun" && "483287971794124810" == message.author.id) {
    let csgo = new disbut.MessageButton().setStyle('blurple').setLabel('CS:GO').setID('cs')
    let lol = new disbut.MessageButton().setStyle('blurple').setLabel('League of Legends').setID('lol')
    let mc = new disbut.MessageButton().setStyle("blurple").setLabel('Minecraft').setID('mc')
    let valo = new disbut.MessageButton().setStyle("blurple").setLabel('Valorant').setID('valo')
    let pubg = new disbut.MessageButton().setStyle("blurple").setLabel('Pubg').setID('pubg')
 
    message.channel.send('Oynadığınız oyunların rollerini aşağıdaki butonlara tıklayarak alabilirsiniz.', {
        buttons: [csgo, lol, mc, valo, pubg]
    });
}
});

client.on('clickButton', async (button) => {


    if (button.id === 'cs') {
        if (button.clicker.member.roles.cache.get(config.csgo)) {
            await button.clicker.member.roles.remove(config.csgo);await button.think(true);await button.reply.edit("Counter-Strike: Global Offensive rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.csgo);await button.think(true);await button.reply.edit("Counter-Strike: Global Offensive rolü üzerinize verildi.")
        }
    }
  
    if (button.id === 'lol') {
        if (button.clicker.member.roles.cache.get(config.lol)) {
            await button.clicker.member.roles.remove(config.lol);await button.think(true);await button.reply.edit("League of Legends rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.lol);await button.think(true);await button.reply.edit("League of Legends rolü üzerinize verildi.")
        }

    }
    if (button.id === 'mc') {
        if (button.clicker.member.roles.cache.get(config.mc)) {
            await button.clicker.member.roles.remove(config.mc);await button.think(true);await button.reply.edit("Minecraft rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.mc);await button.think(true);await button.reply.edit("Minecraft rolü üzerinize verildi.")
        }

    }
    
    if (button.id === 'valo') {
        if (button.clicker.member.roles.cache.get(config.valo)) {
            await button.clicker.member.roles.remove(config.valo);await button.think(true);await button.reply.edit("Valorant rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.valo);await button.think(true);await button.reply.edit("Valorant  rolü üzerinize verildi.")
        }
    }

    if (button.id === 'pubg') {
        if (button.clicker.member.roles.cache.get(config.pubg)) {
            await button.clicker.member.roles.remove(config.pubg);await button.think(true);await button.reply.edit("Pubg rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.pubg);await button.think(true);await button.reply.edit("Pubg rolü üzerinize verildi.")
        }
    }



});

client.login(config.token)
