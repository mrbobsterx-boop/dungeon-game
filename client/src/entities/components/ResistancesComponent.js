// Сопротивления по стихиям/типам урона (в процентах). База + бонусы от
// экипировки/навыков суммируются в StatsSystem.
export class ResistancesComponent {
  constructor({ fire = 0, frost = 0, lightning = 0, poison = 0, holy = 0, chaos = 0 } = {}) {
    this.fire = fire;
    this.frost = frost;
    this.lightning = lightning;
    this.poison = poison;
    this.holy = holy;
    this.chaos = chaos;
  }
}
