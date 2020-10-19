const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //  inserir dados na tabela
  // await saveOrphanage(db, {
  //   lat: "-5.212974",
  //   lng: "-37.3253692",
  //   name: "Lar das Meninos",
  //   about:
  //     "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
  //   whatsapp: "84991045244",
  //   images: [
  //     "https://images.unsplash.com/photo-1572248364230-7f412885f2da?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
  //     "https://images.unsplash.com/photo-1600711725407-2ea4733a38c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
  //     "https://images.unsplash.com/photo-1585338927000-1c787b17eb5e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
  //   ].toString(),
  //   instructions:
  //     "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
  //   opening_hours: "Horário de visitas Das 8h até 18h",
  //   open_on_weekends: "0",
  // });

  // const selectedOrphanage = await db.all("SELECT *FROM orphanages");
  // console.log(selectedOrphanage);

  //   consulta somente 1 orphanages, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  console.log(orphanage);
});
