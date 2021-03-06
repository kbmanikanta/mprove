import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClipboardModule } from 'ngx-clipboard';
import * as components from '@app/components/_index';
import { ColorPickerModule } from '@app/modules/colorpicker/colorpicker.module';
import { FractionModule } from '@app/modules/fraction.module';
import { MyCovalentModule } from '@app/modules/my-covalent.module';
import { MyMaterialModule } from '@app/modules/my-material.module';
import { SharedModule } from '@app/modules/shared.module';
import { ValidationMsgModule } from '@app/modules/validation-msg.module';
import { VisualModule } from '@app/modules/visual.module';

@NgModule({
  imports: [
    SharedModule,
    ClipboardModule,
    FractionModule,
    CommonModule,
    MyMaterialModule,
    MyCovalentModule,
    ColorPickerModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    VisualModule,
    ValidationMsgModule
  ],
  declarations: [
    components.ModelComponent,
    components.ModelTreeComponent,
    components.ModelFiltersComponent,
    components.MconfigComponent,
    components.QueryComponent,
    components.SqlComponent,
    components.DataComponent,
    components.MainTableComponent,
    components.ChartComponent,
    components.ChartEditorComponent,
    components.ChartViewerComponent,
    components.ChartControlMinComponent,
    components.ChartControlMaxComponent,
    components.ChartControlUnitsComponent,
    components.ChartControlTitleComponent,
    components.ChartControlXAxisLabelComponent,
    components.ChartControlYAxisLabelComponent,
    components.ChartControlLegendTitleComponent,
    components.ChartControlPageSizeComponent,
    components.ChartControlArcWidthComponent,
    components.ChartControlBarPaddingComponent,
    components.ChartControlGroupPaddingComponent,
    components.ChartControlInnerPaddingComponent,
    components.ChartControlAngleSpanComponent,
    components.ChartControlStartAngleComponent,
    components.ChartControlYScaleMinComponent,
    components.ChartControlYScaleMaxComponent,
    components.ChartControlXScaleMaxComponent,
    components.ChartControlBigSegmentsComponent,
    components.ChartControlSmallSegmentsComponent,
    components.ChartControlViewWidthComponent,
    components.ChartControlViewHeightComponent,
    components.ChartControlSelectTypeComponent,
    components.ChartControlSelectXFieldComponent,
    components.ChartControlSelectYFieldComponent,
    components.ChartControlSelectMultiFieldComponent,
    components.ChartControlSelectValueFieldComponent,
    components.ChartControlSelectPreviousValueFieldComponent,
    components.ChartControlSelectInterpolationComponent,
    components.ChartControlSelectColorSchemeComponent,
    components.ChartControlSelectSchemeTypeComponent,
    components.ChartControlSelectTileWidthComponent,
    components.ChartControlSelectTileHeightComponent,
    components.ChartControlSelectViewSizeComponent,
    components.ChartControlCheckboxYFieldsComponent,
    components.ChartControlCheckboxHideColumnsComponent,
    components.ChartTableComponent,
    components.ChartGaugeComponent,
    components.ChartNumberCardComponent,
    components.ChartGaugeLinearComponent,
    components.ChartTreeMapComponent,
    components.ChartHeatMapComponent,
    components.ChartLineComponent,
    components.ChartAreaComponent,
    components.ChartAreaStackedComponent,
    components.ChartAreaNormalizedComponent,
    components.ChartPieComponent,
    components.ChartPieAdvancedComponent,
    components.ChartPieGridComponent,
    components.ChartBarVerticalComponent,
    components.ChartBarVerticalGroupedComponent,
    components.ChartBarVerticalStackedComponent,
    components.ChartBarVerticalNormalizedComponent,
    components.ChartBarHorizontalComponent,
    components.ChartBarHorizontalGroupedComponent,
    components.ChartBarHorizontalStackedComponent,
    components.ChartBarHorizontalNormalizedComponent
  ],
  entryComponents: [],
  exports: [components.ModelComponent]
})
export class ModelModule {}
