export class SettingsService{
  private alternativeBackground = false;


  set(status:boolean){
    this.alternativeBackground = status;
  }

  getToggleStatus(){
    return this.alternativeBackground;
  }


}
