export class AppareilService {
    appareils = [
        {
          id: 1,
          name: 'manchine à laver',
          status: 'éteint'
        },
        {
          id: 2,
          name: 'ordinateur',
          status: 'allumé'
        },
        {
          id: 3,
          name: 'télévision',
          status: 'éteint'
        }
      ]

    switchOnAll() {
        for(let appareil of this.appareils) {
            appareil.status = 'allumé';
        }
    }

      
    switchOffAll() {
        for(let appareil of this.appareils) {
            appareil.status = 'éteint';
        }
    }

    getAppareilById(id: number){
      const appareil = this.appareils.find(
        (appareilObject) => {
          return appareilObject.id === id;
        }
      );
      return appareil;
    }
    

    switchOnONe(index: number) {
        this.appareils[index].status = 'allumé';
    }

    switchOffONe(index: number) {
        this.appareils[index].status = 'éteint';
    }
    
}