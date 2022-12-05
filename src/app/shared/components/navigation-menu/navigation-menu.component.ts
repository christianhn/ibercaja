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
      link: "/dashboard/accounts",
      isShown: true
    },
    {
      id: "financing",
      name: "Financiación",
      link: "/dashboard/financing",
      isShown: false
    }, 
    {
      id: "commerce",
      name: "Comercio exterior",
      link: "/dashboard/commerce",
      isShown: false
    },
    {
      id: "payments",
      name: "Cobros y pagos",
      icon: "icon",
      link: "/dashboard/payments",
      isShown: false
    }
  ];
  navSelected = this.navLevels.find(element => element.id === "accounts")?.name;
  navOpened = false;

  selectLevel(level: any){
    
    this.navLevels.forEach(element => {
      element.isShown = false;
    });
    
    level.isShown = true;
    this.navSelected = level.name;
  }

  openNav(){
    this.navOpened = !this.navOpened;
  }

}
