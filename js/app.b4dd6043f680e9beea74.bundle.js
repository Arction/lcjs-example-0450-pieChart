(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,a,i)=>{const n=i(89),{lightningChart:s,PieChartTypes:t,LegendBoxBuilders:l,SliceLabelFormatters:d,Themes:o}=n,m=window.innerWidth>599?t.LabelsOnSides:t.LabelsInsideSlices,r=s({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).Pie({theme:o[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0,type:m}).setTitle("Project Time Division").setMultipleSliceExplosion(!0);[{name:"Planning",value:40},{name:"Development",value:120},{name:"Testing",value:60},{name:"Review",value:24},{name:"Bug Fixing",value:90}].map((e=>r.addSlice(e.name,e.value))),r.setLabelFormatter(d.NamePlusRelativeValue),r.addLegendBox(l.VerticalLegendBox).setAutoDispose({type:"max-width",maxWidth:.3}).add(r)}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);