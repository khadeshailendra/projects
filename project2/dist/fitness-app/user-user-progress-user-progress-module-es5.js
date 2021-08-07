function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-progress-user-progress-module"], {
  /***/
  "./src/app/services/progress.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/progress.service.ts ***!
    \**********************************************/

  /*! exports provided: ProgressService */

  /***/
  function srcAppServicesProgressServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressService", function () {
      return ProgressService;
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

    var ProgressService = /*#__PURE__*/function () {
      function ProgressService(http, log) {
        _classCallCheck(this, ProgressService);

        this.http = http;
        this.log = log;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.log.authstring
          })
        };
      }

      _createClass(ProgressService, [{
        key: "getStatus",
        value: function getStatus(exerciseid) {
          return this.http.get("http://localhost:5000/exercisetracker/" + exerciseid, this.httpOptions);
        }
      }, {
        key: "setStatus",
        value: function setStatus(exerciseid, obj) {
          return this.http.put("http://localhost:5000/exercisetracker/" + exerciseid, obj, this.httpOptions);
        }
      }, {
        key: "setProgress",
        value: function setProgress(obj) {
          return this.http.put("http://localhost:5000/progressupdate", obj, this.httpOptions);
        }
      }, {
        key: "getProgress",
        value: function getProgress() {
          return this.http.get("http://localhost:5000/progressdata", this.httpOptions);
        }
      }]);

      return ProgressService;
    }();

    ProgressService.ɵfac = function ProgressService_Factory(t) {
      return new (t || ProgressService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]));
    };

    ProgressService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProgressService,
      factory: ProgressService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressService, [{
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

  },

  /***/
  "./src/app/user/user-progress/daily-activity/daily-activity.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/user/user-progress/daily-activity/daily-activity.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: DailyActivityComponent */

  /***/
  function srcAppUserUserProgressDailyActivityDailyActivityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DailyActivityComponent", function () {
      return DailyActivityComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/workout.service */
    "./src/app/services/workout.service.ts");
    /* harmony import */


    var src_app_services_progress_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/progress.service */
    "./src/app/services/progress.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function DailyActivityComponent_div_0_li_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DailyActivityComponent_div_0_li_3_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var y_r4 = ctx.index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.currentSelection(y_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var x_r3 = ctx.$implicit;
        var y_r4 = ctx.index;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r3.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:5000/files/images/", ctx_r2.status[y_r4].status + ".png", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DailyActivityComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DailyActivityComponent_div_0_li_3_Template, 3, 2, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Weight(lbs)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DailyActivityComponent_div_0_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.weight = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Calories Burnt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DailyActivityComponent_div_0_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.updateProgress();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Update todays status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DailyActivityComponent_div_0_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.stop();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Stop");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DailyActivityComponent_div_0_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.timer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Start");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DailyActivityComponent_div_0_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.finish();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Finish");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.exercises);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.weight);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.calories);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Current Activity : ", ctx_r0.currentActivity, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.mins, " Mins ", ctx_r0.secs, " Secs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.watchtoggle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.watchtoggle);
      }
    }

    function DailyActivityComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You Have not Subscribed to any Workout plans yet\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DailyActivityComponent = /*#__PURE__*/function () {
      function DailyActivityComponent(ps, ws, pss) {
        _classCallCheck(this, DailyActivityComponent);

        this.ps = ps;
        this.ws = ws;
        this.pss = pss;
        this.exercises = [];
        this.status = [];
        this.calories = 0;
        this.mins = 0;
        this.secs = 0;
        this.currentActivity = "None";
        this.watchtoggle = true;
      }

      _createClass(DailyActivityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.ps.getProfile().subscribe(function (profile) {
            _this.profile = profile;

            _this.ws.getWorkoutByName(_this.profile.subscription).subscribe(function (workout) {
              _this.workout = workout;

              _this.ws.getWorkoutmap(_this.workout.id).subscribe(function (data) {
                var _loop = function _loop(x) {
                  _this.exercises.push(data[x].exercise);

                  _this.pss.getStatus(data[x].exercise.id).subscribe(function (data) {
                    return _this.status[x] = {
                      status: data.status,
                      duration: data.duration
                    };
                  });
                };

                for (var x in data) {
                  _loop(x);
                }
              });
            });
          });
        }
      }, {
        key: "currentSelection",
        value: function currentSelection(index) {
          if (this.status[index].status == "incomplete") {
            this.currentActivity = this.exercises[index].name;
            this.currentIndex = index;
            this.status[this.currentIndex].status = "pending";
          } else {
            alert("This Activity is Up for the day");
          }
        }
      }, {
        key: "timer",
        value: function timer() {
          var _this2 = this;

          if (this.currentActivity == "None") alert("You have not selected any Exercise");else {
            this.watchtoggle = false;
            this.secs = 0;
            this.mins = 0;
            this.currentinterval = setInterval(function () {
              _this2.secs++;

              if (_this2.secs == 60) {
                _this2.mins++;
                _this2.secs = 0;
              }
            }, 1000);
          }
        }
      }, {
        key: "stop",
        value: function stop() {
          clearInterval(this.currentinterval);
          this.watchtoggle = true;
        }
      }, {
        key: "finish",
        value: function finish() {
          var _this3 = this;

          this.currentDuration = Math.round(this.mins + this.secs / 60);
          if (this.currentDuration < 1) alert("You need to do an exercise atleast for a minute");else if (confirm("Are you finished this exercise?")) {
            var index = this.currentIndex;
            console.log(index);
            this.secs = 0;
            this.mins = 0;
            this.watchtoggle = true;
            this.currentActivity = "None";
            clearInterval(this.currentinterval);
            var obj = {
              duration: this.currentDuration
            };
            this.pss.setStatus(this.exercises[index].id, obj).subscribe(function (result) {
              if (_this3.profile.weight >= 100 && _this3.profile.weight <= 140) _this3.calories += Number(_this3.exercises[index].calrange1) * obj.duration;else if (_this3.profile.weight >= 140 && _this3.profile.weight <= 180) _this3.calories += Number(_this3.exercises[index].calrange2) * obj.duration;else _this3.calories += Number(_this3.exercises[index].calrange3) * obj.duration;
              _this3.status[index].status = result.status;
              _this3.status[index].duration = result.duration;
            }, function () {
              alert("something went wrong");
            });
          }
        }
      }, {
        key: "updateProgress",
        value: function updateProgress() {
          alert("event fired");

          if (this.weight == undefined || isNaN(this.weight) || this.weight < 100 || this.weight >= 300) {
            alert("invalid weight");
          } else {
            var status = "incomplete";
            var count = 0;
            var calories = 0;

            for (var x in this.exercises) {
              if (this.status[x].status == "completed") count++;
              if (this.profile.weight >= 100 && this.profile.weight <= 140) calories += Number(this.exercises[x].calrange1) * this.status[x].duration;else if (this.profile.weight >= 140 && this.profile.weight <= 180) calories += Number(this.exercises[x].calrange2) * this.status[x].duration;else calories += Number(this.exercises[x].calrange3) * this.status[x].duration;
            }

            this.calories = calories;
            console.log(count, this.exercises.length);
            if (count == this.exercises.length) status = "complete";
            console.log(status);
            var obj = {
              weight: this.weight,
              calories: this.calories,
              status: status
            };
            this.pss.setProgress(obj).subscribe(function () {
              alert("Updated");
            }, function () {
              alert("Some issue");
            });
          }
        }
      }]);

      return DailyActivityComponent;
    }();

    DailyActivityComponent.ɵfac = function DailyActivityComponent_Factory(t) {
      return new (t || DailyActivityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_2__["WorkoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_progress_service__WEBPACK_IMPORTED_MODULE_3__["ProgressService"]));
    };

    DailyActivityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DailyActivityComponent,
      selectors: [["app-daily-activity"]],
      decls: 2,
      vars: 2,
      consts: [["id", "container", 4, "ngIf"], ["id", "container"], ["id", "left"], [3, "click", 4, "ngFor", "ngForOf"], [1, "form-item"], ["for", "weight"], ["type", "text", 3, "ngModel", "ngModelChange"], [3, "click"], ["id", "right"], ["id", "timer-box"], ["id", "current-activity"], [1, "timer"], [3, "disabled", "click"], [3, "src"]],
      template: function DailyActivityComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DailyActivityComponent_div_0_Template, 29, 8, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DailyActivityComponent_div_1_Template, 2, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status.length == ctx.exercises.length && ctx.exercises.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profile != undefined && ctx.profile.subscription == null);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: ["#container[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n#left[_ngcontent-%COMP%]{\r\n    width: 400px;\r\n    padding: 20px;\r\n    margin: 10px;\r\n    float:left;\r\n}\r\n\r\n#right[_ngcontent-%COMP%]{\r\n    width: 600px;\r\n    padding: 20px;\r\n    margin: 20px;\r\n    float: left;\r\n}\r\n\r\n#left[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    list-style-type:none;\r\n    background-color: #AF7AC5;\r\n    margin: 20px;\r\n    width: 240px;\r\n    height:40px;\r\n    font-weight: bold;\r\n    border-radius: 5px;\r\n    box-shadow: 5px 5px 5px  rgb(203, 153, 224);\r\n    padding: 10px;\r\n    color: white;\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n\r\nli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 40px;\r\n    width: 40px;\r\n    display: block;\r\n    float: left;\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 5px;\r\n}\r\n\r\n#timer-box[_ngcontent-%COMP%]{\r\n    height: 300px;\r\n    width: 300px;\r\n    padding: 20px;\r\n    margin: 30px;\r\n    background-color: rgb(100, 70, 112);\r\n    color: white;\r\n    border: none;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    margin: 10px;\r\n    padding: 10px;\r\n    background-color: #AF7AC5;\r\n    border: none;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n#timer-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin-top: 30px;\r\n    margin-left: 20px;\r\n}\r\n\r\n#current-activity[_ngcontent-%COMP%]{\r\n    margin-top : 20px;\r\n    margin-bottom: 20px;\r\n    font-size: 16px;\r\n}\r\n\r\n.timer[_ngcontent-%COMP%]{\r\n    padding: 20px;\r\n    text-align: center;\r\n    font-size: 30px;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-weight: bolder;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXByb2dyZXNzL2RhaWx5LWFjdGl2aXR5L2RhaWx5LWFjdGl2aXR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsNkVBQTZFO0FBQ2pGOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDJDQUEyQztJQUMzQyxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw4Q0FBOEM7SUFDOUMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItcHJvZ3Jlc3MvZGFpbHktYWN0aXZpdHkvZGFpbHktYWN0aXZpdHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXJ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNsZWZ0e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcbiNyaWdodHtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4jbGVmdCBsaXtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FGN0FDNTtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIGhlaWdodDo0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAgcmdiKDIwMywgMTUzLCAyMjQpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxubGkgaW1ne1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIHRvcDogNXB4O1xyXG59XHJcblxyXG4jdGltZXItYm94e1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCA3MCwgMTEyKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBRjdBQzU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiN0aW1lci1ib3ggYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbiNjdXJyZW50LWFjdGl2aXR5e1xyXG4gICAgbWFyZ2luLXRvcCA6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi50aW1lcntcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyActivityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-daily-activity',
          templateUrl: './daily-activity.component.html',
          styleUrls: ['./daily-activity.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]
        }, {
          type: src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_2__["WorkoutService"]
        }, {
          type: src_app_services_progress_service__WEBPACK_IMPORTED_MODULE_3__["ProgressService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user-progress/uprogress-home/uprogress-home.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/user/user-progress/uprogress-home/uprogress-home.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: UprogressHomeComponent */

  /***/
  function srcAppUserUserProgressUprogressHomeUprogressHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UprogressHomeComponent", function () {
      return UprogressHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var UprogressHomeComponent = /*#__PURE__*/function () {
      function UprogressHomeComponent(router, route) {
        _classCallCheck(this, UprogressHomeComponent);

        this.router = router;
        this.route = route;
      }

      _createClass(UprogressHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeroute",
        value: function changeroute(url) {
          this.router.navigate([url], {
            relativeTo: this.route.parent
          });
          ;
        }
      }]);

      return UprogressHomeComponent;
    }();

    UprogressHomeComponent.ɵfac = function UprogressHomeComponent_Factory(t) {
      return new (t || UprogressHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    UprogressHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UprogressHomeComponent,
      selectors: [["app-uprogress-home"]],
      decls: 9,
      vars: 0,
      consts: [[1, "activity", 3, "click"], ["src", "http://localhost:5000/files/images/start.png"], ["src", "http://localhost:5000/files/images/table.png"], ["src", "http://localhost:5000/files/images/chart.png"]],
      template: function UprogressHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UprogressHomeComponent_Template_li_click_0_listener() {
            return ctx.changeroute("activity");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Start todays Workout ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UprogressHomeComponent_Template_li_click_3_listener() {
            return ctx.changeroute("tables");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Your Progress Statiscs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UprogressHomeComponent_Template_li_click_6_listener() {
            return ctx.changeroute("graphs");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Your Progress Curves ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["li[_ngcontent-%COMP%]{\r\n    list-style-type:none;\r\n    background-color: #AF7AC5;\r\n    margin: 30px;\r\n    width: 320px;\r\n    height:50px;\r\n    font-weight: bold;\r\n    border-radius: 5px;\r\n    box-shadow: 5px 5px 5px  rgb(203, 153, 224);\r\n    padding: 10px;\r\n    color: white;\r\n    position: relative;\r\n    cursor: pointer;\r\n    float: left\r\n}\r\n\r\nli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 50px;\r\n    width: 50px;\r\n    display: block;\r\n    float: left;\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXByb2dyZXNzL3Vwcm9ncmVzcy1ob21lL3Vwcm9ncmVzcy1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsMkNBQTJDO0lBQzNDLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLXByb2dyZXNzL3Vwcm9ncmVzcy1ob21lL3Vwcm9ncmVzcy1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaXtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FGN0FDNTtcclxuICAgIG1hcmdpbjogMzBweDtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICAgIGhlaWdodDo1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAgcmdiKDIwMywgMTUzLCAyMjQpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZsb2F0OiBsZWZ0XHJcbn1cclxuXHJcbmxpIGltZ3tcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB0b3A6IDVweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UprogressHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-uprogress-home',
          templateUrl: './uprogress-home.component.html',
          styleUrls: ['./uprogress-home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user-progress/user-graphs/line-chart/line-chart.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/user/user-progress/user-graphs/line-chart/line-chart.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: LineChartComponent */

  /***/
  function srcAppUserUserProgressUserGraphsLineChartLineChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LineChartComponent", function () {
      return LineChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");

    var LineChartComponent = /*#__PURE__*/function () {
      function LineChartComponent() {
        _classCallCheck(this, LineChartComponent);

        this.view = [450, 300]; // options

        this.legend = false;
        this.showLabels = true;
        this.animations = true;
        this.xAxis = true;
        this.yAxis = true;
        this.showYAxisLabel = true;
        this.showXAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.timeline = true;
        this.colorScheme = {
          domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
      }

      _createClass(LineChartComponent, [{
        key: "onSelect",
        value: function onSelect(data) {
          console.log('Item clicked', JSON.parse(JSON.stringify(data)));
        }
      }, {
        key: "onActivate",
        value: function onActivate(data) {
          console.log('Activate', JSON.parse(JSON.stringify(data)));
        }
      }, {
        key: "onDeactivate",
        value: function onDeactivate(data) {
          console.log('Deactivate', JSON.parse(JSON.stringify(data)));
        }
      }]);

      return LineChartComponent;
    }();

    LineChartComponent.ɵfac = function LineChartComponent_Factory(t) {
      return new (t || LineChartComponent)();
    };

    LineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LineChartComponent,
      selectors: [["app-line-chart"]],
      inputs: {
        multi: "multi",
        xAxisLabel: ["xaxis", "xAxisLabel"],
        yAxisLabel: ["yaxis", "yAxisLabel"]
      },
      decls: 1,
      vars: 11,
      consts: [[3, "view", "scheme", "legend", "showXAxisLabel", "showYAxisLabel", "xAxis", "yAxis", "xAxisLabel", "yAxisLabel", "timeline", "results", "select", "activate", "deactivate"]],
      template: function LineChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-charts-line-chart", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function LineChartComponent_Template_ngx_charts_line_chart_select_0_listener($event) {
            return ctx.onSelect($event);
          })("activate", function LineChartComponent_Template_ngx_charts_line_chart_activate_0_listener($event) {
            return ctx.onActivate($event);
          })("deactivate", function LineChartComponent_Template_ngx_charts_line_chart_deactivate_0_listener($event) {
            return ctx.onDeactivate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("scheme", ctx.colorScheme)("legend", ctx.legend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxis", ctx.xAxis)("yAxis", ctx.yAxis)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("timeline", ctx.timeline)("results", ctx.multi);
        }
      },
      directives: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_1__["LineChartComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1wcm9ncmVzcy91c2VyLWdyYXBocy9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-line-chart',
          templateUrl: './line-chart.component.html',
          styleUrls: ['./line-chart.component.css']
        }]
      }], function () {
        return [];
      }, {
        multi: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        xAxisLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['xaxis']
        }],
        yAxisLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['yaxis']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/user/user-progress/user-graphs/user-graphs.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/user/user-progress/user-graphs/user-graphs.component.ts ***!
    \*************************************************************************/

  /*! exports provided: UserGraphsComponent */

  /***/
  function srcAppUserUserProgressUserGraphsUserGraphsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserGraphsComponent", function () {
      return UserGraphsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_progress_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/progress.service */
    "./src/app/services/progress.service.ts");
    /* harmony import */


    var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./line-chart/line-chart.component */
    "./src/app/user/user-progress/user-graphs/line-chart/line-chart.component.ts");

    var UserGraphsComponent = /*#__PURE__*/function () {
      function UserGraphsComponent(pf) {
        _classCallCheck(this, UserGraphsComponent);

        this.pf = pf;
      }

      _createClass(UserGraphsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.pf.getProgress().subscribe(function (data) {
            var result = [];
            var result2 = [];
            _this4.progress = data;
            var object1 = {
              "name": "Days",
              "series": []
            };
            var object2 = {
              "name": "Days",
              "series": []
            };

            for (var x in _this4.progress) {
              object1["series"].push({
                "name": _this4.progress[x].date,
                "value": Number(_this4.progress[x].weight)
              });
              object2["series"].push({
                "name": _this4.progress[x].date,
                "value": Number(_this4.progress[x].calories)
              });
            }

            result.push(object1);
            result2.push(object2);
            _this4.series1 = result;
            _this4.series2 = result2;
          }, function () {
            return _this4.progress = [];
          });
        }
      }]);

      return UserGraphsComponent;
    }();

    UserGraphsComponent.ɵfac = function UserGraphsComponent_Factory(t) {
      return new (t || UserGraphsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_progress_service__WEBPACK_IMPORTED_MODULE_1__["ProgressService"]));
    };

    UserGraphsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserGraphsComponent,
      selectors: [["app-user-graphs"]],
      decls: 9,
      vars: 2,
      consts: [[1, "container"], [1, "left"], ["xaxis", "Days", "yaxis", "Weight", 3, "multi"], ["xaxis", "Days", "yaxis", "Calories", 3, "multi"]],
      template: function UserGraphsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your Weight Transformation Curve");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-line-chart", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Curve-Calories Burnt per Day ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-line-chart", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multi", ctx.series1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multi", ctx.series2);
        }
      },
      directives: [_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_2__["LineChartComponent"]],
      styles: ["h1[_ngcontent-%COMP%]{\r\n    color: rgb(47, 5, 65);\r\n}\r\n\r\n.left[_ngcontent-%COMP%]{\r\n    float: left;\r\n    width: 450px;\r\n    margin: 30px;\r\n    border: 3px solid  #AF7AC5;\r\n    padding:5px;\r\n    background-color:  rgb(253, 248, 255);\r\n    box-shadow: 5px 5px 5px rgb(235, 226, 226);\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXByb2dyZXNzL3VzZXItZ3JhcGhzL3VzZXItZ3JhcGhzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLHFDQUFxQztJQUNyQywwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItcHJvZ3Jlc3MvdXNlci1ncmFwaHMvdXNlci1ncmFwaHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgY29sb3I6IHJnYig0NywgNSwgNjUpO1xyXG59XHJcblxyXG4ubGVmdHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgICNBRjdBQzU7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2IoMjUzLCAyNDgsIDI1NSk7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2IoMjM1LCAyMjYsIDIyNik7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserGraphsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-graphs',
          templateUrl: './user-graphs.component.html',
          styleUrls: ['./user-graphs.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_progress_service__WEBPACK_IMPORTED_MODULE_1__["ProgressService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user-progress/user-progress.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/user/user-progress/user-progress.module.ts ***!
    \************************************************************/

  /*! exports provided: UserProgressModule */

  /***/
  function srcAppUserUserProgressUserProgressModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProgressModule", function () {
      return UserProgressModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _uprogress_home_uprogress_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./uprogress-home/uprogress-home.component */
    "./src/app/user/user-progress/uprogress-home/uprogress-home.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _daily_activity_daily_activity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./daily-activity/daily-activity.component */
    "./src/app/user/user-progress/daily-activity/daily-activity.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _user_tables_user_tables_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-tables/user-tables.component */
    "./src/app/user/user-progress/user-tables/user-tables.component.ts");
    /* harmony import */


    var _user_graphs_user_graphs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user-graphs/user-graphs.component */
    "./src/app/user/user-progress/user-graphs/user-graphs.component.ts");
    /* harmony import */


    var _user_graphs_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user-graphs/line-chart/line-chart.component */
    "./src/app/user/user-progress/user-graphs/line-chart/line-chart.component.ts");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");

    var route = [{
      path: "",
      component: _uprogress_home_uprogress_home_component__WEBPACK_IMPORTED_MODULE_2__["UprogressHomeComponent"]
    }, {
      path: "activity",
      component: _daily_activity_daily_activity_component__WEBPACK_IMPORTED_MODULE_4__["DailyActivityComponent"]
    }, {
      path: "tables",
      component: _user_tables_user_tables_component__WEBPACK_IMPORTED_MODULE_6__["UserTablesComponent"]
    }, {
      path: "graphs",
      component: _user_graphs_user_graphs_component__WEBPACK_IMPORTED_MODULE_7__["UserGraphsComponent"]
    }];

    var UserProgressModule = function UserProgressModule() {
      _classCallCheck(this, UserProgressModule);
    };

    UserProgressModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserProgressModule
    });
    UserProgressModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserProgressModule_Factory(t) {
        return new (t || UserProgressModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(route), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__["NgxChartsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserProgressModule, {
        declarations: [_uprogress_home_uprogress_home_component__WEBPACK_IMPORTED_MODULE_2__["UprogressHomeComponent"], _daily_activity_daily_activity_component__WEBPACK_IMPORTED_MODULE_4__["DailyActivityComponent"], _user_tables_user_tables_component__WEBPACK_IMPORTED_MODULE_6__["UserTablesComponent"], _user_graphs_user_graphs_component__WEBPACK_IMPORTED_MODULE_7__["UserGraphsComponent"], _user_graphs_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_8__["LineChartComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__["NgxChartsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProgressModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_uprogress_home_uprogress_home_component__WEBPACK_IMPORTED_MODULE_2__["UprogressHomeComponent"], _daily_activity_daily_activity_component__WEBPACK_IMPORTED_MODULE_4__["DailyActivityComponent"], _user_tables_user_tables_component__WEBPACK_IMPORTED_MODULE_6__["UserTablesComponent"], _user_graphs_user_graphs_component__WEBPACK_IMPORTED_MODULE_7__["UserGraphsComponent"], _user_graphs_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_8__["LineChartComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(route), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__["NgxChartsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user-progress/user-tables/user-tables.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/user/user-progress/user-tables/user-tables.component.ts ***!
    \*************************************************************************/

  /*! exports provided: UserTablesComponent */

  /***/
  function srcAppUserUserProgressUserTablesUserTablesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserTablesComponent", function () {
      return UserTablesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_progress_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/progress.service */
    "./src/app/services/progress.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserTablesComponent_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var x_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r2.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r2.weight);
      }
    }

    function UserTablesComponent_tr_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var x_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r3.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r3.calories);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r3.status);
      }
    }

    var UserTablesComponent = /*#__PURE__*/function () {
      function UserTablesComponent(pf) {
        _classCallCheck(this, UserTablesComponent);

        this.pf = pf;
        this.progress = [];
      }

      _createClass(UserTablesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.pf.getProgress().subscribe(function (data) {
            return _this5.progress = data;
          }, function () {
            return _this5.progress = [];
          });
        }
      }]);

      return UserTablesComponent;
    }();

    UserTablesComponent.ɵfac = function UserTablesComponent_Factory(t) {
      return new (t || UserTablesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_progress_service__WEBPACK_IMPORTED_MODULE_1__["ProgressService"]));
    };

    UserTablesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserTablesComponent,
      selectors: [["app-user-tables"]],
      decls: 27,
      vars: 2,
      consts: [[1, "table-content"], [1, "left-table"], [4, "ngFor", "ngForOf"], [1, "right-table"]],
      template: function UserTablesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Weight Changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Weight(lbs)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserTablesComponent_tr_12_Template, 5, 2, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Calories Lost Statistics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Calories(lbs)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Workout Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UserTablesComponent_tr_26_Template, 7, 3, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.progress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.progress);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["#table-content[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    margin: 30px;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serifE;\r\n    \r\n}\r\n\r\n.left-table[_ngcontent-%COMP%]{\r\n    float: left;\r\n    width: 500px;\r\n    padding: 20px;\r\n    margin: 20px;\r\n}\r\n\r\n.right-table[_ngcontent-%COMP%]{\r\n    float: left;\r\n    width: 500px;\r\n    padding: 20px;\r\n    margin: 20px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    color: #AF7AC5;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\r\n    width: 120px;\r\n    padding: 5px;\r\n    height: 35px;\r\n}\r\n\r\nth[_ngcontent-%COMP%]{\r\n    background-color: #AF7AC5;\r\n    color: white;\r\n}\r\n\r\ntd[_ngcontent-%COMP%]{\r\n    color: rgb(51, 14, 66);\r\n    background-color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXByb2dyZXNzL3VzZXItdGFibGVzL3VzZXItdGFibGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDhFQUE4RTs7QUFFbEY7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItcHJvZ3Jlc3MvdXNlci10YWJsZXMvdXNlci10YWJsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0YWJsZS1jb250ZW50e1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmRTtcclxuICAgIFxyXG59XHJcblxyXG4ubGVmdC10YWJsZXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLnJpZ2h0LXRhYmxle1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG5oMXtcclxuICAgIGNvbG9yOiAjQUY3QUM1O1xyXG59XHJcblxyXG50aCx0ZHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG5cclxudGh7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUY3QUM1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG50ZHtcclxuICAgIGNvbG9yOiByZ2IoNTEsIDE0LCA2Nik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserTablesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-tables',
          templateUrl: './user-tables.component.html',
          styleUrls: ['./user-tables.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_progress_service__WEBPACK_IMPORTED_MODULE_1__["ProgressService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=user-user-progress-user-progress-module-es5.js.map