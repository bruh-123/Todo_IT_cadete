import { Component, OnInit } from '@angular/core';
import { Viaje } from '../../interfaces/viaje';
import { ViajesService } from '../../services/viajes.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
})
export class HistorialComponent implements OnInit {
  viajes: Viaje[] = [];
  constructor(private viajesService: ViajesService) {}

  ngOnInit(): void {
    this.getViajes();
    console.log(this.viajes);
  }

  getViajes() {
    this.viajesService.getFinalizados().subscribe({
      next: (resp) => {
        this.viajes = [...resp[0], ...resp[1], ...resp[2]];
        this.viajes = this.viajes.filter((v) => {
          if (
            v.travelEquipmentDTOs[v.travelEquipmentDTOs.length - 1].cadete
              ?.id == this.viajesService.userLoged$.id
          ) {
            return true;
          }
          return false;
        });
      },
    });
  }
}
