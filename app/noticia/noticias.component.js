"use strict";
var core_1 = require("@angular/core");
var elementRegistryModule = require("nativescript-angular/element-registry");
elementRegistryModule.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
var noticias_service_1 = require("./noticias.service");
var NoticiasComponent = (function () {
    function NoticiasComponent(noticiasService) {
        this.noticiasService = noticiasService;
        this.offset = 5;
    }
    NoticiasComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('você está em notícias.component');
        this.noticiasService.getNoticias().then(function (response) {
            var data = response;
            _this.noticias = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var noticia = data_1[_i];
                _this.noticias.push(noticia);
            }
        });
    };
    NoticiasComponent.prototype.carregarMais = function () {
        var _this = this;
        this.noticiasService.getMaisNoticias(this.offset).then(function (response) {
            var data = response;
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var noticia = data_2[_i];
                _this.noticias.push(noticia);
            }
            _this.offset += 5;
        });
    };
    return NoticiasComponent;
}());
NoticiasComponent = __decorate([
    core_1.Component({
        selector: "ns-noticias",
        moduleId: module.id,
        templateUrl: "./noticias.component.html",
        changeDetection: core_1.ChangeDetectionStrategy.Default
    }),
    __metadata("design:paramtypes", [noticias_service_1.NoticiasService])
], NoticiasComponent);
exports.NoticiasComponent = NoticiasComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNpYXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90aWNpYXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkU7QUFDM0UsNkVBQStFO0FBQy9FLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBRW5HLHVEQUFxRDtBQVNyRCxJQUFhLGlCQUFpQjtJQUs1QiwyQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSQyxrREFBa0Q7UUFDbEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQy9DLElBQUksSUFBSSxHQUFPLFFBQVEsQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNuQixHQUFHLENBQUMsQ0FBZ0IsVUFBSSxFQUFKLGFBQUksRUFBSixrQkFBSSxFQUFKLElBQUk7Z0JBQW5CLElBQUksT0FBTyxhQUFBO2dCQUNkLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzdCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsd0NBQVksR0FBWjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDOUQsSUFBSSxJQUFJLEdBQU8sUUFBUSxDQUFDO1lBQ3hCLEdBQUcsQ0FBQSxDQUFnQixVQUFJLEVBQUosYUFBSSxFQUFKLGtCQUFJLEVBQUosSUFBSTtnQkFBbkIsSUFBSSxPQUFPLGFBQUE7Z0JBQ2IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDN0I7WUFDRCxLQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFSCx3QkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7QUE5QlksaUJBQWlCO0lBTjdCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtRQUN4QyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsT0FBTztLQUNqRCxDQUFDO3FDQU1xQyxrQ0FBZTtHQUx6QyxpQkFBaUIsQ0E4QjdCO0FBOUJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBlbGVtZW50UmVnaXN0cnlNb2R1bGUgZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XG5lbGVtZW50UmVnaXN0cnlNb2R1bGUucmVnaXN0ZXJFbGVtZW50KFwiQ2FyZFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKS5DYXJkVmlldyk7XG5cbmltcG9ydCB7IE5vdGljaWFzU2VydmljZSB9IGZyb20gXCIuL25vdGljaWFzLnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibnMtbm90aWNpYXNcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9ub3RpY2lhcy5jb21wb25lbnQuaHRtbFwiLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHRcbn0pXG5leHBvcnQgY2xhc3MgTm90aWNpYXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG5vdGljaWFzOiBhbnk7XG4gIG9mZnNldDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbm90aWNpYXNTZXJ2aWNlOiBOb3RpY2lhc1NlcnZpY2Upe1xuICAgIHRoaXMub2Zmc2V0ID0gNTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWR7XG4gICAgLy8gY29uc29sZS5sb2coJ3ZvY8OqIGVzdMOhIGVtIG5vdMOtY2lhcy5jb21wb25lbnQnKTtcbiAgICB0aGlzLm5vdGljaWFzU2VydmljZS5nZXROb3RpY2lhcygpLnRoZW4oKHJlc3BvbnNlKT0+e1xuICAgICAgbGV0IGRhdGE6YW55ID0gcmVzcG9uc2U7XG4gICAgICB0aGlzLm5vdGljaWFzID0gW107XG4gICAgICBmb3IgKGxldCBub3RpY2lhIG9mIGRhdGEpe1xuICAgICAgICB0aGlzLm5vdGljaWFzLnB1c2gobm90aWNpYSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjYXJyZWdhck1haXMoKXtcbiAgICB0aGlzLm5vdGljaWFzU2VydmljZS5nZXRNYWlzTm90aWNpYXModGhpcy5vZmZzZXQpLnRoZW4oKHJlc3BvbnNlKT0+e1xuICAgICAgbGV0IGRhdGE6YW55ID0gcmVzcG9uc2U7XG4gICAgICBmb3IobGV0IG5vdGljaWEgb2YgZGF0YSl7XG4gICAgICAgIHRoaXMubm90aWNpYXMucHVzaChub3RpY2lhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub2Zmc2V0ICs9IDU7XG4gICAgfSk7XG4gIH1cblxufSJdfQ==