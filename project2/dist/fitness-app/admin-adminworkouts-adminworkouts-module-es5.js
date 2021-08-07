function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-adminworkouts-adminworkouts-module"], {
  /***/
  "./src/app/admin/adminworkouts/adminworkouts.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/admin/adminworkouts/adminworkouts.module.ts ***!
    \*************************************************************/

  /*! exports provided: AdminworkoutsModule */

  /***/
  function srcAppAdminAdminworkoutsAdminworkoutsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminworkoutsModule", function () {
      return AdminworkoutsModule;
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


    var _workouts_home_workouts_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./workouts-home/workouts-home.component */
    "./src/app/admin/adminworkouts/workouts-home/workouts-home.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _workout_form_workout_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./workout-form/workout-form.component */
    "./src/app/admin/adminworkouts/workout-form/workout-form.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_angmaterial_angmaterial_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/angmaterial/angmaterial.module */
    "./src/app/angmaterial/angmaterial.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var src_app_shared_workout_item_details_workout_item_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/workout-item-details/workout-item-details.component */
    "./src/app/shared/workout-item-details/workout-item-details.component.ts");

    var route = [{
      path: "",
      component: _workouts_home_workouts_home_component__WEBPACK_IMPORTED_MODULE_2__["WorkoutsHomeComponent"]
    }, {
      path: "details",
      component: src_app_shared_workout_item_details_workout_item_details_component__WEBPACK_IMPORTED_MODULE_8__["WorkoutItemDetailsComponent"]
    }];

    var AdminworkoutsModule = function AdminworkoutsModule() {
      _classCallCheck(this, AdminworkoutsModule);
    };

    AdminworkoutsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminworkoutsModule
    });
    AdminworkoutsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminworkoutsModule_Factory(t) {
        return new (t || AdminworkoutsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(route), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], src_app_angmaterial_angmaterial_module__WEBPACK_IMPORTED_MODULE_6__["AngmaterialModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminworkoutsModule, {
        declarations: [_workouts_home_workouts_home_component__WEBPACK_IMPORTED_MODULE_2__["WorkoutsHomeComponent"], _workout_form_workout_form_component__WEBPACK_IMPORTED_MODULE_4__["WorkoutFormComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], src_app_angmaterial_angmaterial_module__WEBPACK_IMPORTED_MODULE_6__["AngmaterialModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminworkoutsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_workouts_home_workouts_home_component__WEBPACK_IMPORTED_MODULE_2__["WorkoutsHomeComponent"], _workout_form_workout_form_component__WEBPACK_IMPORTED_MODULE_4__["WorkoutFormComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(route), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], src_app_angmaterial_angmaterial_module__WEBPACK_IMPORTED_MODULE_6__["AngmaterialModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/adminworkouts/workout-form/workout-form.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/admin/adminworkouts/workout-form/workout-form.component.ts ***!
    \****************************************************************************/

  /*! exports provided: WorkoutFormComponent */

  /***/
  function srcAppAdminAdminworkoutsWorkoutFormWorkoutFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkoutFormComponent", function () {
      return WorkoutFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/workout.service */
    "./src/app/services/workout.service.ts");
    /* harmony import */


    var src_app_services_exercises_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/exercises.service */
    "./src/app/services/exercises.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function WorkoutFormComponent_h6_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "red")("text-align", "center");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Please enter all the fields correctly ", ctx_r0.myForm.valid, "");
      }
    }

    function WorkoutFormComponent_input_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 16);
      }
    }

    function WorkoutFormComponent_div_32_img_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
      }
    }

    function WorkoutFormComponent_div_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkoutFormComponent_div_32_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var i_r4 = ctx.index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.selectedItem(i_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WorkoutFormComponent_div_32_img_2_Template, 1, 0, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var exercise_r3 = ctx.$implicit;
        var i_r4 = ctx.index;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.selected[i_r4]["class"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:5000/files/uploads/", exercise_r3.imagefile, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selected[i_r4]["class"] == "tick");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exercise_r3.name);
      }
    }

    var WorkoutFormComponent = /*#__PURE__*/function () {
      function WorkoutFormComponent(fb, ws, es, dialogRef) {
        _classCallCheck(this, WorkoutFormComponent);

        this.fb = fb;
        this.ws = ws;
        this.es = es;
        this.dialogRef = dialogRef;
        this.selected = [];
        this.myForm = this.fb.group({
          name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
          description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(20)]],
          weeks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          days: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          imagefile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
      }

      _createClass(WorkoutFormComponent, [{
        key: "uploadFile1",
        value: function uploadFile1(event) {
          var file = event.target.files[0];
          this.myForm.patchValue({
            imagefile: file
          });
          this.myForm.get('imagefile').updateValueAndValidity();
        }
      }, {
        key: "addWorkout",
        value: function addWorkout() {
          var _this = this;

          var exercises = [];

          for (var x in this.selected) {
            if (this.selected[x].id != 0) {
              exercises.push(this.selected[x].id);
            }
          }

          if (exercises.length == 0) {
            alert("Please select exercises");
          } else {
            console.log(exercises);
            var formData = new FormData();
            formData.append("name", this.myForm.get('name').value);
            formData.append("description", this.myForm.get('description').value);
            formData.append("weeks", this.myForm.get('weeks').value);
            formData.append("days", this.myForm.get('days').value);
            formData.append("imagefile", this.myForm.get('imagefile').value);
            this.ws.addWorkout(formData).subscribe(function (result) {
              console.log(result);
              var workoutid = result.id;
              var obj = {
                workoutid: workoutid,
                exercises: exercises
              };

              _this.ws.addWorkoutmap(obj).subscribe(function () {
                return _this.dialogRef.close();
              }, function () {
                return alert("Something Went wrong");
              });
            }, function () {
              alert("Something Went Wrong");
            });
          }
        }
      }, {
        key: "selectedItem",
        value: function selectedItem(x) {
          if (this.selected[x]["class"].length == 0) {
            this.selected[x].id = this.exercises[x].id;
            this.selected[x]["class"] = "tick";
          } else {
            this.selected[x].id = 0;
            this.selected[x]["class"] = "";
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.es.getExercise().subscribe(function (exercises) {
            _this2.exercises = exercises;
            console.log(_this2.exercises);

            for (var x in _this2.exercises) {
              var temp = {
                "class": '',
                id: 0
              };

              _this2.selected.push(temp);
            }

            console.log(_this2.selected);
          }, function () {});
        }
      }]);

      return WorkoutFormComponent;
    }();

    WorkoutFormComponent.ɵfac = function WorkoutFormComponent_Factory(t) {
      return new (t || WorkoutFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_2__["WorkoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_exercises_service__WEBPACK_IMPORTED_MODULE_3__["ExercisesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]));
    };

    WorkoutFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorkoutFormComponent,
      selectors: [["app-workout-form"]],
      decls: 33,
      vars: 8,
      consts: [[3, "formGroup", "submit"], [1, "container"], [1, "left"], [1, "form-item"], [1, "label"], ["type", "text", "formControlName", "name"], ["formControlName", "description"], [1, "right"], ["type", "number", "formControlName", "weeks"], ["type", "number", "formControlName", "days"], ["type", "file", "formControlName", "imagefile", 3, "change"], [1, "submit-item"], [3, "color", "textAlign", 4, "ngIf"], ["type", "submit", "value", "add Workout", 4, "ngIf"], [1, "exercise-select"], ["class", "exercise-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "submit", "value", "add Workout"], [1, "exercise-item", 3, "ngClass", "click"], ["id", "main", 3, "src"], ["id", "tick", "src", "http://localhost:5000/files/images/tick.png", 4, "ngIf"], [1, "name"], ["id", "tick", "src", "http://localhost:5000/files/images/tick.png"]],
      template: function WorkoutFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function WorkoutFormComponent_Template_form_submit_0_listener() {
            return ctx.addWorkout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Adding a new Workout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "textarea", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Weeks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Days");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Image file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function WorkoutFormComponent_Template_input_change_25_listener($event) {
            return ctx.uploadFile1($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, WorkoutFormComponent_h6_27_Template, 2, 5, "h6", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, WorkoutFormComponent_input_28_Template, 1, 0, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Please Select Exercises in this plan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, WorkoutFormComponent_div_32_Template, 5, 4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.myForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", "left")("color", "darkblue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.exercises);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
      styles: [".container[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    padding: 30px;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  .left[_ngcontent-%COMP%]{\r\n    float: left;\r\n    width: 48%;\r\n    \r\n  }\r\n  \r\n  .right[_ngcontent-%COMP%]{\r\n     float: left;\r\n     width: 48%;\r\n    \r\n  }\r\n  \r\n  h1[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n      color: rgb(96, 96, 168);\r\n      margin-bottom: 20px;\r\n  }\r\n  \r\n  .exercise-item[_ngcontent-%COMP%]{\r\n    margin: 10px;\r\n    float: left;\r\n    width: 100px;\r\n    height:100px;\r\n    position:relative;\r\n    cursor: pointer;\r\n    box-shadow: 5px 5px 20px rgb(201, 141, 226);\r\n}\r\n  \r\n  .exercise-item[_ngcontent-%COMP%]   #main[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n  \r\n  .exercise-item[_ngcontent-%COMP%]   #tick[_ngcontent-%COMP%]{\r\n    display: block;\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 0px;\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n  \r\n  .name[_ngcontent-%COMP%]{\r\n    position:absolute;\r\n    bottom: 0px;\r\n    text-align: center;\r\n    background-color:black;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    color: white;\r\n    font-size: 10px;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    opacity: 0.3;\r\n}\r\n  \r\n  .tick[_ngcontent-%COMP%]{\r\n    border: 3px solid rgb(195, 71, 248);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW53b3Jrb3V0cy93b3Jrb3V0LWZvcm0vd29ya291dC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsVUFBVTs7RUFFWjs7RUFFQTtLQUNHLFdBQVc7S0FDWCxVQUFVOztFQUViOztFQUVBO01BQ0ksa0JBQWtCO01BQ2xCLDZFQUE2RTtNQUM3RSx1QkFBdUI7TUFDdkIsbUJBQW1CO0VBQ3ZCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMkNBQTJDO0FBQy9DOztFQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7RUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztBQUNmOztFQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLDZFQUE2RTtJQUM3RSxZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0VBRUE7SUFDSSxtQ0FBbUM7QUFDdkMiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbndvcmtvdXRzL3dvcmtvdXQtZm9ybS93b3Jrb3V0LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgLmxlZnR7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA0OCU7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLnJpZ2h0e1xyXG4gICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgIHdpZHRoOiA0OCU7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgaDF7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGNvbG9yOiByZ2IoOTYsIDk2LCAxNjgpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmV4ZXJjaXNlLWl0ZW17XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDoxMDBweDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYigyMDEsIDE0MSwgMjI2KTtcclxufVxyXG5cclxuLmV4ZXJjaXNlLWl0ZW0gI21haW57XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4ZXJjaXNlLWl0ZW0gI3RpY2t7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4ubmFtZXtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4udGlja3tcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigxOTUsIDcxLCAyNDgpO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkoutFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-workout-form',
          templateUrl: './workout-form.component.html',
          styleUrls: ['./workout-form.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_2__["WorkoutService"]
        }, {
          type: src_app_services_exercises_service__WEBPACK_IMPORTED_MODULE_3__["ExercisesService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/adminworkouts/workouts-home/workouts-home.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/adminworkouts/workouts-home/workouts-home.component.ts ***!
    \******************************************************************************/

  /*! exports provided: WorkoutsHomeComponent */

  /***/
  function srcAppAdminAdminworkoutsWorkoutsHomeWorkoutsHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkoutsHomeComponent", function () {
      return WorkoutsHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _workout_form_workout_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../workout-form/workout-form.component */
    "./src/app/admin/adminworkouts/workout-form/workout-form.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/workout.service */
    "./src/app/services/workout.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_workout_item_workout_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/workout-item/workout-item.component */
    "./src/app/shared/workout-item/workout-item.component.ts");

    function WorkoutsHomeComponent_app_workout_item_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-workout-item", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkoutsHomeComponent_app_workout_item_4_Template_app_workout_item_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var workout_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.changeroute(workout_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var workout_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("workout", workout_r1);
      }
    }

    var WorkoutsHomeComponent = /*#__PURE__*/function () {
      function WorkoutsHomeComponent(router, route, dialog, ws) {
        _classCallCheck(this, WorkoutsHomeComponent);

        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.ws = ws;
      }

      _createClass(WorkoutsHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.ws.getWorkout().subscribe(function (data) {
            return _this3.workouts = data;
          }, function () {
            return _this3.workouts = [];
          });
        }
      }, {
        key: "changeroute",
        value: function changeroute(current) {
          this.router.navigate(['details'], {
            relativeTo: this.route.parent,
            state: current
          });
          ;
        }
      }, {
        key: "loadDialog",
        value: function loadDialog() {
          var _this4 = this;

          var dialogRef = this.dialog.open(_workout_form_workout_form_component__WEBPACK_IMPORTED_MODULE_1__["WorkoutFormComponent"], {
            width: '900px',
            height: '650px'
          });
          dialogRef.afterClosed().subscribe(function () {
            return _this4.ngOnInit();
          });
        }
      }]);

      return WorkoutsHomeComponent;
    }();

    WorkoutsHomeComponent.ɵfac = function WorkoutsHomeComponent_Factory(t) {
      return new (t || WorkoutsHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_4__["WorkoutService"]));
    };

    WorkoutsHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorkoutsHomeComponent,
      selectors: [["app-workouts-home"]],
      decls: 5,
      vars: 1,
      consts: [[1, "form-button", 3, "click"], ["src", "http://localhost:5000/files/images/workout.png"], ["id", "workouts"], [3, "workout", "click", 4, "ngFor", "ngForOf"], [3, "workout", "click"]],
      template: function WorkoutsHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkoutsHomeComponent_Template_div_click_0_listener() {
            return ctx.loadDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add A Workout plan ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WorkoutsHomeComponent_app_workout_item_4_Template, 1, 1, "app-workout-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.workouts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _shared_workout_item_workout_item_component__WEBPACK_IMPORTED_MODULE_6__["WorkoutItemComponent"]],
      styles: [".form-button[_ngcontent-%COMP%]{\r\n    border-radius: 10px;\r\n    background-color:#AF7AC5;\r\n    padding: 10px;\r\n    color: white;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    margin: 20px;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n    box-shadow: 5px 5px 10px rgb(222, 160, 248);\r\n    width: 200px;\r\n    \r\n}\r\n\r\n.form-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]\r\n{\r\n  height: 60px;\r\n  width: 60px;\r\n  margin-right: 10px;\r\n  vertical-align: text-bottom;\r\n  \r\n}\r\n\r\n#workouts[_ngcontent-%COMP%]{\r\n     padding: 20px;\r\n     overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW53b3Jrb3V0cy93b3Jrb3V0cy1ob21lL3dvcmtvdXRzLWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLFlBQVk7SUFDWiw2RUFBNkU7SUFDN0UsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsMkNBQTJDO0lBQzNDLFlBQVk7O0FBRWhCOztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDJCQUEyQjs7QUFFN0I7O0FBRUE7S0FDSyxhQUFhO0tBQ2IsZ0JBQWdCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW53b3Jrb3V0cy93b3Jrb3V0cy1ob21lL3dvcmtvdXRzLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWJ1dHRvbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNBRjdBQzU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiKDIyMiwgMTYwLCAyNDgpO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5mb3JtLWJ1dHRvbiBpbWdcclxue1xyXG4gIGhlaWdodDogNjBweDtcclxuICB3aWR0aDogNjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xyXG4gIFxyXG59XHJcblxyXG4jd29ya291dHN7XHJcbiAgICAgcGFkZGluZzogMjBweDtcclxuICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkoutsHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-workouts-home',
          templateUrl: './workouts-home.component.html',
          styleUrls: ['./workouts-home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }, {
          type: src_app_services_workout_service__WEBPACK_IMPORTED_MODULE_4__["WorkoutService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=admin-adminworkouts-adminworkouts-module-es5.js.map