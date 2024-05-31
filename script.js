//Seccion 1

const getScopeVar = () => {
  var varName = 'Soy var dentro de scope';
  if (true) {
    varName = 'Cambie valor de var';
  }
  console.log(varName); //Var permite la reasignacion de valoes y poder acceder al valor de var incluso si en un bloque diferente cambia de valor
};
const getScopeLet = () => {
  let letName = 'Soy let';
  if (true) {
    letName = 'Cambie de valor de let ';
  }
  //console.log(letName) Let permite la reasignacion de valores pero no se puede acceder al nuevo valor si no esta dentro del mismo bloque donde se asigna
};

const constName = 'Soy valor fijo';
//constName = "Intenta cambiar de valor cons" No permite la reasignacion de valores ya que es de un valor unico
console.log(constName);
getScopeVar();
getScopeLet();

//Seccion 2 y 4

var userId;
var userIdNew;

const getData = () => {
  fetch(`https://jsonplaceholder.typicode.com/users/`)
    .then((response) => response.json())
    .then((data) => {
      console.log('data', data);
      data.forEach(({ id }) => {
        console.log('id', id);
      });
      userId = data[0].id;
      console.log(userId);
      postData(userId);
      putData(userId);
    })
    .catch((error) => console.error(`Error: ${error}`));
};
const postData = (userId) => {
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Alonso',
      id: userId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

//Dentro e los bloques trycatch en la seccion try es para intentar realizar correctamente la accion , en la seccion  catch es para cachar aqueloos errores que resulten de la operacion, y finaly es para ejecutar alguna accion u operacion ya sea que el codigo entre al try o al catch
const putData = async (userId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Christian',
          id: userId,
        }),
      }
    );
    const data = await response.json();
    console.log(`Actualizado ${JSON.stringify(data)}`);
  } catch (error) {
    console.error(`Error: ${error}`);
  } finally {
    console.log('Operacion finalizada');
  }
};

const deleteData = async (userId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      {
        method: 'DELETE',
      }
    );
    console.log(`Eliminado correctamente${response.status}`);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

//Seccion 3
const getPromesa = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0) {
        resolve('Promesa resuelta correctamente');
      } else {
        reject('Promesa falla');
      }
    }, time);
  });
};

//seccion 5
const getDataNew = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await response.json();
    console.log('data new', data);
    userIdNew = data[0].id;
    putDataNew(userIdNew);
    postDataNew(userIdNew);
    deleteDataNew(userIdNew);
  } catch (error) {}
};

const putDataNew = (userId) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    method: 'PUT',
    body: JSON.stringify({
      name: 'Alonso',
      id: userId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};
const postDataNew = async (userId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Christian',
          id: userId,
        }),
      }
    );
    const data = await response.json();
    console.log(`Actualizado ${JSON.stringify(data)}`);
  } catch (error) {
    console.error(`Error: ${error}`);
  } finally {
    console.log('Operacion finalizada');
  }
};
const deleteDataNew = (userId) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((json) => console.log('Eliminado correctamente'));
};
getPromesa(3000).then((message) => console.log(message));
postData();
getData();
putData();
deleteData();
getDataNew();
putDataNew();
postDataNew();
deleteDataNew();
