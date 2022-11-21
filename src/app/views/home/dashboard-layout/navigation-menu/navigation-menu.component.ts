import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent {

  navLevels = [
    {
      id: "accounts",
      name: "Cuentas tarjetas y TPVS",
      isShown: false
    },
    {
      id: "financing",
      name: "Financiación",
      isShown: false
    }, 
    {
      id: "commerce",
      name: "Comercio exterior",
      isShown: false
    },
    {
      id: "payments",
      name: "Cobros y pagos",
      icon: "icon",
      isShown: false
    }
  ];
  
  selectLevel(level: any){
    
    this.navLevels.forEach(element => {
      element.isShown = false;
    });
    
    level.isShown = true;
  }

}
