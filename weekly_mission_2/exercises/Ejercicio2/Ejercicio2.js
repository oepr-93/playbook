const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 }
]
console.log("******************************* \n*****     Ejercicio 2     ***** \n*******************************");
console.log("\n 1.- Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH \n");
console.log("Respuesta: \n");
console.log(" Object.values(explorers).forEach(val => {");
console.log("     console .log(Nombre explorer: +val.name);") ;  
console.log(" }); \nResultado");

Object.values(explorers).forEach(val => {
   console.log("Nombre explorer: "+val.name);
});
console.log("******************************* ");
console.log("\n 2.- Imprime el stack de cada explorer, usa FOR EACH \n");
console.log("Respuesta: \n");
console.log(" Object.values(explorers).forEach(val => {");
console.log("     console .log(Stack: +val.stack);") ;  
console.log(" }); \nResultado");
Object.values(explorers).forEach(val => {
   console.log("Stack: "+val.stack);
});
console.log("******************************* \n");
console.log("\n 3.- Crea una nueva lista con las listas de stacks de cada explorer, usa MAP \n");
Object.values(explorers).forEach(val => {
   const stacks = val.stack.map(function() {
      return val.stack;
   });
   console.log(stacks);
});
console.log("******************************* \n");
console.log("4.- Obtén la lista de explorers que tengan en su stack js, usa FILTER (para validar un elemento en un lista se usa el método includes) \n");
const stack_js = explorers.filter(function(e) {
   if (e.stack.includes('js'))
      return e;
   else {
      return null;
   }
});
console.log(stack_js);
console.log("******************************* \n");
console.log("5.- Busca el primer explorer que sea de la CDMX, usa FIND \n");
const found = explorers.find(element => element.city === 'CDMX');
console.log(found);

console.log("******************************* \n");
console.log("6.- Obtén la suma de todos los exercises_completed, usa REDUCE \n");
const total = Object.values(explorers).reduce((t, {exercises_completed}) => t + exercises_completed, 0)
console.log(total)

console.log("******************************* \n");
console.log("7.- Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME \n");


var algo = 0;
Object.values(explorers).forEach(val => {
   //console.log("Frontend: "+val.missions.frontend.isFinished);
      const aux1 = Object.values(val.missions.frontend);
      //console.log(aux1.isFinished);
      //const aux = val.missions.frontend.isFinished;
      console.log(aux1.some(function(element) {
         if (element == true) {
            algo ++;
            return true;
         }
         else {
            return false;
         }
      }));
});
console.log("Existe un valor de true para "+algo+ " explorers");
//[2, 5, 8, 1, 4].some(isBiggerThan10);
/*const val1 = Object.values(explorers).every(({exercisesFinished}) => exercisesFinished  === true);
console.log(val1);*/

console.log("******************************* \n");
console.log("8.- Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY. \n");


var algo2 = 0;
Object.values(explorers).forEach(val => {
   //console.log("Frontend: "+val.missions.frontend.isFinished);
   const aux1 = Object.values(val.missions.onboarding);
   //console.log(aux1.isFinished);
   //const aux = val.missions.frontend.isFinished;
   console.log(aux1.some(function(element) {
      if (element == true) {
         algo2 ++;
         return true;
      }
      else {
         return false;
      }
   }));
});
if (algo2 == 3) {
   console.log("Los "+algo2+ " explorers tienen la propiedad isFinished del onboarding como true");
}
else {
   console.log("Solo "+algo2+ " explorers tienen la propiedad isFinished del onboarding como true");
}