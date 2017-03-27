"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var NoticiasService = (function () {
    function NoticiasService(http) {
        this.http = http;
        this.url = "http://diocesevr.com.br/api/noticias.php";
        this.data = null;
    }
    NoticiasService.prototype.getNoticias = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (error) {
                console.log(error);
            });
        });
    };
    NoticiasService.prototype.getMaisNoticias = function (offset) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = _this.jsonToURLEncoded({ offset: offset });
            _this.http.get(_this.url + "?" + body)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (error) {
                console.log(error);
            });
        });
    };
    NoticiasService.prototype.jsonToURLEncoded = function (jsonString) {
        return Object.keys(jsonString).map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key]);
        }).join('&');
    };
    return NoticiasService;
}());
NoticiasService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], NoticiasService);
exports.NoticiasService = NoticiasService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWNpYXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5vdGljaWFzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyQztBQUMzQyxzQ0FBcUM7QUFDckMsbUJBQWlCO0FBR2pCLElBQWEsZUFBZTtJQU0xQix5QkFBbUIsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFKN0IsUUFBRyxHQUFXLDBDQUEwQyxDQUFDO1FBS3ZELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQUEsaUJBYUM7UUFYQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ3hCLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUM7aUJBQ3BCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7aUJBQ3RCLFNBQVMsQ0FBQyxVQUFBLElBQUk7Z0JBQ2IsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLE9BQU8sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckIsQ0FBQyxFQUFDLFVBQUEsS0FBSztnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBRUQseUNBQWUsR0FBZixVQUFnQixNQUFNO1FBQXRCLGlCQVlDO1FBWEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztZQUN4QixJQUFJLElBQUksR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUNyRCxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsR0FBRyxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUM7aUJBQzdCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7aUJBQ3RCLFNBQVMsQ0FBQyxVQUFBLElBQUk7Z0JBQ2IsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLE9BQU8sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckIsQ0FBQyxFQUFDLFVBQUEsS0FBSztnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sMENBQWdCLEdBQXhCLFVBQXlCLFVBQVU7UUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVMsR0FBRztZQUM3QyxNQUFNLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7SUFHSCxzQkFBQztBQUFELENBQUMsQUE5Q0QsSUE4Q0M7QUE5Q1ksZUFBZTtJQUQzQixpQkFBVSxFQUFFO3FDQU9jLFdBQUk7R0FObEIsZUFBZSxDQThDM0I7QUE5Q1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IFwicnhqcy9SeFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm90aWNpYXNTZXJ2aWNlIHtcblxuICB1cmw6IHN0cmluZyA9IFwiaHR0cDovL2Rpb2Nlc2V2ci5jb20uYnIvYXBpL25vdGljaWFzLnBocFwiO1xuICBkYXRhOiBhbnk7XG5cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCl7XG4gICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgfVxuXG4gIGdldE5vdGljaWFzKCl7XG4gICAgXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5odHRwLmdldCh0aGlzLnVybClcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICAgIHJlc29sdmUodGhpcy5kYXRhKTtcbiAgICAgICAgfSxlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIFxuICB9XG5cbiAgZ2V0TWFpc05vdGljaWFzKG9mZnNldCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgbGV0IGJvZHkgPSB0aGlzLmpzb25Ub1VSTEVuY29kZWQoeyBvZmZzZXQ6IG9mZnNldCB9KTtcbiAgICAgIHRoaXMuaHR0cC5nZXQodGhpcy51cmwrXCI/XCIrYm9keSlcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICAgIHJlc29sdmUodGhpcy5kYXRhKTtcbiAgICAgICAgfSxlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBqc29uVG9VUkxFbmNvZGVkKGpzb25TdHJpbmcpe1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhqc29uU3RyaW5nKS5tYXAoZnVuY3Rpb24oa2V5KXtcbiAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChqc29uU3RyaW5nW2tleV0pO1xuICAgIH0pLmpvaW4oJyYnKTtcbiAgfVxuXG5cbn0iXX0=