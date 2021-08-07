function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/admin/exercises/exercise-detail/exercise-detail.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/exercises/exercise-detail/exercise-detail.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ExerciseDetailComponent */

  /***/
  function srcAppAdminExercisesExerciseDetailExerciseDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExerciseDetailComponent", function () {
      return ExerciseDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_exercise_details_page_exercise_details_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/exercise-details-page/exercise-details-page.component */
    "./src/app/shared/exercise-details-page/exercise-details-page.component.ts");

    var ExerciseDetailComponent = /*#__PURE__*/function () {
      function ExerciseDetailComponent(route, router) {
        _classCallCheck(this, ExerciseDetailComponent);

        this.route = route;
        this.router = router;
        this.exercise = this.router.getCurrentNavigation().extras.state;
      }

      _createClass(ExerciseDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExerciseDetailComponent;
    }();

    ExerciseDetailComponent.ɵfac = function ExerciseDetailComponent_Factory(t) {
      return new (t || ExerciseDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ExerciseDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExerciseDetailComponent,
      selectors: [["app-exercise-detail"]],
      decls: 2,
      vars: 1,
      consts: [["id", "exercise-details"], [3, "exercise"]],
      template: function ExerciseDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-exercise-details-page", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("exercise", ctx.exercise);
        }
      },
      directives: [_shared_exercise_details_page_exercise_details_page_component__WEBPACK_IMPORTED_MODULE_2__["ExerciseDetailsPageComponent"]],
      styles: ["#exercise-details[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZXhlcmNpc2VzL2V4ZXJjaXNlLWRldGFpbC9leGVyY2lzZS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2V4ZXJjaXNlcy9leGVyY2lzZS1kZXRhaWwvZXhlcmNpc2UtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZXhlcmNpc2UtZGV0YWlsc3tcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExerciseDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-exercise-detail',
          templateUrl: './exercise-detail.component.html',
          styleUrls: ['./exercise-detail.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/exercises.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/exercises.service.ts ***!
    \***********************************************/

  /*! exports provided: ExercisesService */

  /***/
  function srcAppServicesExercisesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExercisesService", function () {
      return ExercisesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login.service */
    "./src/app/services/login.service.ts");

    var ExercisesService = /*#__PURE__*/function () {
      function ExercisesService(http, log) {
        _classCallCheck(this, ExercisesService);

        this.http = http;
        this.log = log;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': this.log.authstring
          })
        };
      }

      _createClass(ExercisesService, [{
        key: "addExercise",
        value: function addExercise(obj) {
          return this.http.post("http://localhost:5000/exercises/add", obj, this.httpOptions);
        }
      }, {
        key: "getExercise",
        value: function getExercise() {
          return this.http.get("http://localhost:5000/exercises", this.httpOptions);
        }
      }]);

      return ExercisesService;
    }();

    ExercisesService.ɵfac = function ExercisesService_Factory(t) {
      return new (t || ExercisesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]));
    };

    ExercisesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ExercisesService,
      factory: ExercisesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExercisesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map