import{$ as e,B as t,D as n,E as r,G as i,H as a,I as o,N as s,Q as c,R as l,S as u,V as d,W as f,a as p,at as m,b as h,c as g,d as _,et as v,f as y,g as b,h as ee,i as x,j as te,k as ne,lt as S,n as re,nt as ie,ot as ae,p as oe,q as C,r as se,rt as w,s as ce,st as le,t as ue,u as T,ut as E,v as de,w as D,x as fe,z as pe}from"./CanvasPool-Dx1CuLc1.js";var O=[];E.handleByNamedList(S.Environment,O);async function me(e){if(!e)for(let e=0;e<O.length;e++){let t=O[e];if(t.value.test()){await t.value.load();return}}}var k;function he(){if(typeof k==`boolean`)return k;try{k=Function(`param1`,`param2`,`param3`,`return param1[param2] === param3;`)({a:`b`},`a`,`b`)===!0}catch{k=!1}return k}var A=(e=>(e[e.NONE=0]=`NONE`,e[e.COLOR=16384]=`COLOR`,e[e.STENCIL=1024]=`STENCIL`,e[e.DEPTH=256]=`DEPTH`,e[e.COLOR_DEPTH=16640]=`COLOR_DEPTH`,e[e.COLOR_STENCIL=17408]=`COLOR_STENCIL`,e[e.DEPTH_STENCIL=1280]=`DEPTH_STENCIL`,e[e.ALL=17664]=`ALL`,e))(A||{}),ge=class{constructor(e){this.items=[],this._name=e}emit(e,t,n,r,i,a,o,s){let{name:c,items:l}=this;for(let u=0,d=l.length;u<d;u++)l[u][c](e,t,n,r,i,a,o,s);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){let t=this.items.indexOf(e);return t!==-1&&this.items.splice(t,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}},_e=[`init`,`destroy`,`contextChange`,`resolutionChange`,`resetState`,`renderEnd`,`renderStart`,`render`,`update`,`postrender`,`prerender`],ve=class t extends le{constructor(e){super(),this.tick=0,this.uid=ie(`renderer`),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;let t=[..._e,...this.config.runners??[]];this._addRunners(...t),this._unsafeEvalCheck()}async init(e={}){let n=e.skipExtensionImports===!0||e.manageImports===!1;await me(n),!n&&this.config.loaders&&await Promise.all(this.config.loaders.map(e=>e.value.load())),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(let t in this._systemsHash)e={...this._systemsHash[t].constructor.defaultOptions,...e};e={...t.defaultOptions,...e},this._roundPixels=+!!e.roundPixels;for(let t=0;t<this.runners.init.items.length;t++)await this.runners.init.items[t].init(e);this._initOptions=e}render(t,n){this.tick++;let r=t;if(r instanceof D&&(r={container:r},n&&(c(e,`passing a second argument is deprecated, please use render options instead`),r.target=n.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor??(r.clearColor=this.background.colorRgba),r.clear??(r.clear=this.background.clearBeforeRender)),r.clearColor){let e=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=e?r.clearColor:d.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),r.container.visible&&(r.container.enableRenderGroup(),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r))}resize(e,t,n){let r=this.view.resolution;this.view.resize(e,t,n),this.emit(`resize`,this.view.screen.width,this.view.screen.height,this.view.resolution),n!==void 0&&n!==r&&this.runners.resolutionChange.emit(n)}clear(e={}){let t=this;e.target||=t.renderTarget.renderTarget,e.clearColor||=this.background.colorRgba,e.clear??=A.ALL;let{clear:n,clearColor:r,target:i,mipLevel:a,layer:o}=e;d.shared.setValue(r??this.background.colorRgba),t.renderTarget.clear(i,n,d.shared.toArray(),a??0,o??0)}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(e=>{this.runners[e]=new ge(e)})}_addSystems(e){let t;for(t in e){let n=e[t];this._addSystem(n.value,n.name)}}_addSystem(e,t){let n=new e(this);if(this[t])throw Error(`Whoops! The name "${t}" is already in use`);this[t]=n,this._systemsHash[t]=n;for(let e in this.runners)this.runners[e].add(n);return this}_addPipes(e,t){let n=t.reduce((e,t)=>(e[t.name]=t.value,e),{});e.forEach(e=>{let t=e.value,r=e.name,i=n[r];this.renderPipes[r]=new t(this,i?new i:null),this.runners.destroy.add(this.renderPipes[r])})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),(e===!0||typeof e==`object`&&e.releaseGlobalResources)&&pe.release(),Object.values(this.runners).forEach(e=>{e.destroy()}),this._systemsHash=null,this.renderPipes=null,this.removeAllListeners()}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!he())throw Error(`Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.`)}resetState(){this.runners.resetState.emit()}};ve.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};var ye=ve,be=`8.22.0`;S.Application;var xe=class{constructor(e){this._renderer=e}init(){globalThis.__PIXI_RENDERER_INIT__?.(this._renderer,be)}destroy(){this._renderer=null}};xe.extension={type:[S.WebGLSystem,S.WebGPUSystem],name:`initHook`,priority:-10};var j=class{constructor(e){this.rawBinaryData=typeof e==`number`?new ArrayBuffer(e):e instanceof Uint8Array?e.buffer:e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||=new Int8Array(this.rawBinaryData),this._int8View}get uint8View(){return this._uint8View||=new Uint8Array(this.rawBinaryData),this._uint8View}get int16View(){return this._int16View||=new Int16Array(this.rawBinaryData),this._int16View}get int32View(){return this._int32View||=new Int32Array(this.rawBinaryData),this._int32View}get float64View(){return this._float64Array||=new Float64Array(this.rawBinaryData),this._float64Array}get bigUint64View(){return this._bigUint64Array||=new BigUint64Array(this.rawBinaryData),this._bigUint64Array}view(e){return this[`${e}View`]}destroy(){this.rawBinaryData=null,this.uint32View=null,this.float32View=null,this.uint16View=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._int32View=null,this._float64Array=null,this._bigUint64Array=null}static sizeOf(e){switch(e){case`int8`:case`uint8`:return 1;case`int16`:case`uint16`:return 2;case`int32`:case`uint32`:case`float32`:return 4;default:throw Error(`${e} isn't a valid view type`)}}};function M(e,t,n,r){if(n??=0,r??=Math.min(e.byteLength-n,t.byteLength),!(n&7)&&!(r&7)){let i=r/8;new Float64Array(t,0,i).set(new Float64Array(e,n,i))}else if(!(n&3)&&!(r&3)){let i=r/4;new Float32Array(t,0,i).set(new Float32Array(e,n,i))}else new Uint8Array(t).set(new Uint8Array(e,n,r))}var Se={normal:`normal-npm`,add:`add-npm`,screen:`screen-npm`},N=(e=>(e[e.DISABLED=0]=`DISABLED`,e[e.RENDERING_MASK_ADD=1]=`RENDERING_MASK_ADD`,e[e.MASK_ACTIVE=2]=`MASK_ACTIVE`,e[e.INVERSE_MASK_ACTIVE=3]=`INVERSE_MASK_ACTIVE`,e[e.RENDERING_MASK_REMOVE=4]=`RENDERING_MASK_REMOVE`,e[e.NONE=5]=`NONE`,e))(N||{});function Ce(e,t){return t.alphaMode===`no-premultiply-alpha`&&Se[e]||e}var we=[`precision mediump float;`,`void main(void){`,`float test = 0.1;`,`%forloop%`,`gl_FragColor = vec4(0.0);`,`}`].join(`
`);function Te(e){let t=``;for(let n=0;n<e;++n)n>0&&(t+=`
else `),n<e-1&&(t+=`if(test == ${n}.0){}`);return t}function Ee(e,t){if(e===0)throw Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");let n=t.createShader(t.FRAGMENT_SHADER);try{for(;;){let r=we.replace(/%forloop%/gi,Te(e));if(t.shaderSource(n,r),t.compileShader(n),!t.getShaderParameter(n,t.COMPILE_STATUS))e=e/2|0;else break}}finally{t.deleteShader(n)}return e}var P=null;function De(){if(P)return P;let e=b();return P=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),P=Ee(P,e),e.getExtension(`WEBGL_lose_context`)?.loseContext(),P}var Oe=class{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let e=0;e<this.count;e++){let t=this.textures[e];this.textures[e]=null,this.ids[t.uid]=null}this.count=0}},ke=class{constructor(){this.renderPipeId=`batch`,this.action=`startBatch`,this.start=0,this.size=0,this.textures=new Oe,this.blendMode=`normal`,this.topology=`triangle-strip`,this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null,this.elements=null}},F=[],I=0;pe.register({clear:()=>{if(F.length>0)for(let e of F)e&&e.destroy();F.length=0,I=0}});function Ae(){return I>0?F[--I]:new ke}function je(e){e.elements=null,F[I++]=e}var L=0,Me=class e{constructor(t){this.uid=ie(`batcher`),this.dirty=!0,this.batchIndex=0,this.batches=[],this._elements=[],t={...e.defaultOptions,...t},t.maxTextures||(c(`v8.8.0`,`maxTextures is a required option for Batcher now, please pass it in the options`),t.maxTextures=De());let{maxTextures:n,attributesInitialSize:r,indicesInitialSize:i}=t;this.attributeBuffer=new j(r*4),this.indexBuffer=new Uint16Array(i),this.maxTextures=n}begin(){this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0;for(let e=0;e<this.batchIndex;e++)je(this.batches[e]);this.batchIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(e){this._elements[this.elementSize++]=e,e._indexStart=this.indexSize,e._attributeStart=this.attributeSize,e._batcher=this,this.indexSize+=e.indexSize,this.attributeSize+=e.attributeSize*this.vertexSize}checkAndUpdateTexture(e,t){let n=e._batch.textures.ids[t._source.uid];return!n&&n!==0?!1:(e._textureId=n,e.texture=t,!0)}updateElement(e){this.dirty=!0;let t=this.attributeBuffer;e.packAsQuad?this.packQuadAttributes(e,t.float32View,t.uint32View,e._attributeStart,e._textureId):this.packAttributes(e,t.float32View,t.uint32View,e._attributeStart,e._textureId)}break(e){let t=this._elements;if(!t[this.elementStart])return;let n=Ae(),r=n.textures;r.clear();let i=t[this.elementStart],a=Ce(i.blendMode,i.texture._source),o=i.topology;this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);let s=this.attributeBuffer.float32View,c=this.attributeBuffer.uint32View,l=this.indexBuffer,u=this._batchIndexSize,d=this._batchIndexStart,f=`startBatch`,p=[],m=this.maxTextures;for(let i=this.elementStart;i<this.elementSize;++i){let h=t[i];t[i]=null;let g=h.texture._source,_=Ce(h.blendMode,g),v=a!==_||o!==h.topology;if(g._batchTick===L&&!v){h._textureId=g._textureBindLocation,u+=h.indexSize,h.packAsQuad?(this.packQuadAttributes(h,s,c,h._attributeStart,h._textureId),this.packQuadIndex(l,h._indexStart,h._attributeStart/this.vertexSize)):(this.packAttributes(h,s,c,h._attributeStart,h._textureId),this.packIndex(h,l,h._indexStart,h._attributeStart/this.vertexSize)),h._batch=n,p.push(h);continue}g._batchTick=L,(r.count>=m||v)&&(this._finishBatch(n,d,u-d,r,a,o,e,f,p),f=`renderBatch`,d=u,a=_,o=h.topology,n=Ae(),r=n.textures,r.clear(),p=[],++L),h._textureId=g._textureBindLocation=r.count,r.ids[g.uid]=r.count,r.textures[r.count++]=g,h._batch=n,p.push(h),u+=h.indexSize,h.packAsQuad?(this.packQuadAttributes(h,s,c,h._attributeStart,h._textureId),this.packQuadIndex(l,h._indexStart,h._attributeStart/this.vertexSize)):(this.packAttributes(h,s,c,h._attributeStart,h._textureId),this.packIndex(h,l,h._indexStart,h._attributeStart/this.vertexSize))}r.count>0&&(this._finishBatch(n,d,u-d,r,a,o,e,f,p),d=u,++L),this.elementStart=this.elementSize,this._batchIndexStart=d,this._batchIndexSize=u}_finishBatch(e,t,n,r,i,a,o,s,c){e.gpuBindGroup=null,e.bindGroup=null,e.action=s,e.batcher=this,e.textures=r,e.blendMode=i,e.topology=a,e.start=t,e.size=n,e.elements=c,++L,this.batches[this.batchIndex++]=e,o.add(e)}finish(e){this.break(e)}ensureAttributeBuffer(e){e*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(e*4)}ensureIndexBuffer(e){e<=this.indexBuffer.length||this._resizeIndexBuffer(e)}_resizeAttributeBuffer(e){let t=new j(Math.max(e,this.attributeBuffer.size*2));M(this.attributeBuffer.rawBinaryData,t.rawBinaryData),this.attributeBuffer=t}_resizeIndexBuffer(e){let t=this.indexBuffer,n=Math.max(e,t.length*1.5);n+=n%2;let r=n>65535?new Uint32Array(n):new Uint16Array(n);if(r.BYTES_PER_ELEMENT!==t.BYTES_PER_ELEMENT)for(let e=0;e<t.length;e++)r[e]=t[e];else M(t.buffer,r.buffer);this.indexBuffer=r}packQuadIndex(e,t,n){e[t]=n+0,e[t+1]=n+1,e[t+2]=n+2,e[t+3]=n+0,e[t+4]=n+2,e[t+5]=n+3}packIndex(e,t,n,r){let i=e.indices,a=e.indexSize,o=e.indexOffset,s=e.attributeOffset;for(let e=0;e<a;e++)t[n++]=r+i[e+o]-s}destroy(e={}){if(this.batches!==null){for(let e=0;e<this.batchIndex;e++)je(this.batches[e]);this.batches=null,this.geometry.destroy(!0),this.geometry=null,e.shader&&(this.shader?.destroy(),this.shader=null);for(let e=0;e<this._elements.length;e++)this._elements[e]&&(this._elements[e]._batch=null);this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}}};Me.defaultOptions={maxTextures:null,attributesInitialSize:4,indicesInitialSize:6};var Ne=Me,Pe=new Float32Array(1),Fe=new Uint32Array(1),Ie=class extends re{constructor(){let e=new se({data:Pe,label:`attribute-batch-buffer`,usage:x.VERTEX|x.COPY_DST,shrinkToFit:!1}),t=new se({data:Fe,label:`index-batch-buffer`,usage:x.INDEX|x.COPY_DST,shrinkToFit:!1});super({attributes:{aPosition:{buffer:e,format:`float32x2`,stride:24,offset:0},aUV:{buffer:e,format:`float32x2`,stride:24,offset:8},aColor:{buffer:e,format:`unorm8x4`,stride:24,offset:16},aTextureIdAndRound:{buffer:e,format:`uint16x2`,stride:24,offset:20}},indexBuffer:t})}};function Le(e,n,r){if(e)for(let i in e){let a=n[i.toLocaleLowerCase()];if(a){let t=e[i];i===`header`&&(t=t.replace(/@in\s+[^;]+;\s*/g,``).replace(/@out\s+[^;]+;\s*/g,``)),r&&a.push(`//----${r}----//`),a.push(t)}else t(`${i} placement hook does not exist in shader`)}}var Re=/\{\{(.*?)\}\}/g;function ze(e){let t={};return(e.match(Re)?.map(e=>e.replace(/[{()}]/g,``))??[]).forEach(e=>{t[e]=[]}),t}function Be(e,t){let n,r=/@in\s+([^;]+);/g;for(;(n=r.exec(e))!==null;)t.push(n[1])}function Ve(e,t,n=!1){let r=[];Be(t,r),e.forEach(e=>{e.header&&Be(e.header,r)});let i=r;n&&i.sort();let a=i.map((e,t)=>`       @location(${t}) ${e},`).join(`
`),o=t.replace(/@in\s+[^;]+;\s*/g,``);return o=o.replace(`{{in}}`,`
${a}
`),o}function He(e,t){let n,r=/@out\s+([^;]+);/g;for(;(n=r.exec(e))!==null;)t.push(n[1])}function Ue(e){let t=/\b(\w+)\s*:/g.exec(e);return t?t[1]:``}function We(e){return e.replace(/@.*?\s+/g,``)}function Ge(e,t){let n=[];He(t,n),e.forEach(e=>{e.header&&He(e.header,n)});let r=0,i=n.sort().map(e=>e.indexOf(`builtin`)>-1?e:`@location(${r++}) ${e}`).join(`,
`),a=n.sort().map(e=>`       var ${We(e)};`).join(`
`),o=`return VSOutput(
            ${n.sort().map(e=>` ${Ue(e)}`).join(`,
`)});`,s=t.replace(/@out\s+[^;]+;\s*/g,``);return s=s.replace(`{{struct}}`,`
${i}
`),s=s.replace(`{{start}}`,`
${a}
`),s=s.replace(`{{return}}`,`
${o}
`),s}function Ke(e,t){let n=e;for(let e in t){let r=t[e];n=r.join(`
`).length?n.replace(`{{${e}}}`,`//-----${e} START-----//
${r.join(`
`)}
//----${e} FINISH----//`):n.replace(`{{${e}}}`,``)}return n}var R=Object.create(null),z=new Map,qe=0;function Je({template:e,bits:t}){let n=Ze(e,t);if(R[n])return R[n];let{vertex:r,fragment:i}=Xe(e,t);return R[n]=Qe(r,i,t),R[n]}function Ye({template:e,bits:t}){let n=Ze(e,t);return R[n]||(R[n]=Qe(e.vertex,e.fragment,t)),R[n]}function Xe(e,t){let n=t.map(e=>e.vertex).filter(e=>!!e),r=t.map(e=>e.fragment).filter(e=>!!e),i=Ve(n,e.vertex,!0);i=Ge(n,i);let a=Ve(r,e.fragment,!0);return{vertex:i,fragment:a}}function Ze(e,t){return t.map(e=>(z.has(e)||z.set(e,qe++),z.get(e))).sort((e,t)=>e-t).join(`-`)+e.vertex+e.fragment}function Qe(e,t,n){let r=ze(e),i=ze(t);return n.forEach(e=>{Le(e.vertex,r,e.name),Le(e.fragment,i,e.name)}),{vertex:Ke(e,r),fragment:Ke(t,i)}}var $e=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}

        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);

        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,et=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;

    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {

        {{start}}

        var outColor:vec4<f32>;

        {{main}}

        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`,tt=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;

        {{start}}

        vColor = vec4(1.);

        {{main}}

        vUV = uv;

        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,nt=`

    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {

        {{start}}

        vec4 outColor;

        {{main}}

        finalColor = outColor * vColor;

        {{end}}
    }
`,rt={name:`global-uniforms-bit`,vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},it={name:`global-uniforms-bit`,vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};function at({bits:e,name:t}){let n=Je({template:{fragment:et,vertex:$e},bits:[rt,...e]});return oe.from({name:t,vertex:{source:n.vertex,entryPoint:`main`},fragment:{source:n.fragment,entryPoint:`main`}})}function ot({bits:e,name:t}){return new ee({name:t,...Ye({template:{vertex:tt,fragment:nt},bits:[it,...e]})})}var st={name:`color-bit`,vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},ct={name:`color-bit`,vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}},B={};function lt(e){let t=[];if(e===1)t.push(`@group(1) @binding(0) var textureSource1: texture_2d<f32>;`),t.push(`@group(1) @binding(1) var textureSampler1: sampler;`);else{let n=0;for(let r=0;r<e;r++)t.push(`@group(1) @binding(${n++}) var textureSource${r+1}: texture_2d<f32>;`),t.push(`@group(1) @binding(${n++}) var textureSampler${r+1}: sampler;`)}return t.join(`
`)}function ut(e){let t=[];if(e===1)t.push(`outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);`);else{t.push(`switch vTextureId {`);for(let n=0;n<e;n++)n===e-1?t.push(`  default:{`):t.push(`  case ${n}:{`),t.push(`      outColor = textureSampleGrad(textureSource${n+1}, textureSampler${n+1}, vUV, uvDx, uvDy);`),t.push(`      break;}`);t.push(`}`)}return t.join(`
`)}function dt(e){return B[e]||(B[e]={name:`texture-batch-bit`,vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;

                ${lt(e)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${ut(e)}
            `}}),B[e]}var V={};function ft(e){let t=[];for(let n=0;n<e;n++)n>0&&t.push(`else`),n<e-1&&t.push(`if(vTextureId < ${n}.5)`),t.push(`{`),t.push(`	outColor = texture(uTextures[${n}], vUV);`),t.push(`}`);return t.join(`
`)}function pt(e){return V[e]||(V[e]={name:`texture-batch-bit`,vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;

                uniform sampler2D uTextures[${e}];

            `,main:`

                ${ft(e)}
            `}}),V[e]}var mt={name:`round-pixels-bit`,vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},ht={name:`round-pixels-bit`,vertex:{header:`
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},gt={};function _t(e){let t=gt[e];if(t)return t;let n=new Int32Array(e);for(let t=0;t<e;t++)n[t]=t;return t=gt[e]=new y({uTextures:{value:n,type:`i32`,size:e}},{isStatic:!0}),t}var vt=class extends g{constructor(e){let t=ot({name:`batch`,bits:[ct,pt(e),ht]}),n=at({name:`batch`,bits:[st,dt(e),mt]});super({glProgram:t,gpuProgram:n,resources:{batchSamplers:_t(e)}}),this.maxTextures=e}},H=null,yt=class e extends Ne{constructor(t){super(t),this.geometry=new Ie,this.name=e.extension.name,this.vertexSize=6,H??=new vt(t.maxTextures),this.shader=H}packAttributes(e,t,n,r,i){let a=i<<16|e.roundPixels&65535,o=e.transform,s=o.a,c=o.b,l=o.c,u=o.d,d=o.tx,f=o.ty,{positions:p,uvs:m}=e,h=e.color,g=e.attributeOffset,_=g+e.attributeSize;for(let e=g;e<_;e++){let i=e*2,o=p[i],g=p[i+1];t[r++]=s*o+l*g+d,t[r++]=u*g+c*o+f,t[r++]=m[i],t[r++]=m[i+1],n[r++]=h,n[r++]=a}}packQuadAttributes(e,t,n,r,i){let a=e.texture,o=e.transform,s=o.a,c=o.b,l=o.c,u=o.d,d=o.tx,f=o.ty,p=e.bounds,m=p.maxX,h=p.minX,g=p.maxY,_=p.minY,v=a.uvs,y=e.color,b=i<<16|e.roundPixels&65535;t[r+0]=s*h+l*_+d,t[r+1]=u*_+c*h+f,t[r+2]=v.x0,t[r+3]=v.y0,n[r+4]=y,n[r+5]=b,t[r+6]=s*m+l*_+d,t[r+7]=u*_+c*m+f,t[r+8]=v.x1,t[r+9]=v.y1,n[r+10]=y,n[r+11]=b,t[r+12]=s*m+l*g+d,t[r+13]=u*g+c*m+f,t[r+14]=v.x2,t[r+15]=v.y2,n[r+16]=y,n[r+17]=b,t[r+18]=s*h+l*g+d,t[r+19]=u*g+c*h+f,t[r+20]=v.x3,t[r+21]=v.y3,n[r+22]=y,n[r+23]=b}_updateMaxTextures(e){this.shader.maxTextures!==e&&(H=new vt(e),this.shader=H)}destroy(){this.shader=null,super.destroy()}};yt.extension={type:[S.Batcher],name:`default`};var U=yt,bt=class{constructor(e){this.items=Object.create(null);let{renderer:t,type:n,onUnload:r,priority:i,name:a}=e;this._renderer=t,t.gc.addResourceHash(this,`items`,n,i??0),this._onUnload=r,this.name=a}add(e){return!this.items[e.uid]&&(this.items[e.uid]=e,e.once(`unload`,this.remove,this),e._gcLastUsed=this._renderer.gc.now,!0)}remove(e,...t){if(!this.items[e.uid])return;let n=e._gpuData[this._renderer.uid];n&&(this._onUnload?.(e,...t),e.off(`unload`,this.remove,this),n.destroy(),e._gpuData[this._renderer.uid]=null,this.items[e.uid]=null)}removeAll(...e){Object.values(this.items).forEach(t=>t&&this.remove(t,...e))}destroy(...e){this.removeAll(...e),this.items=Object.create(null),this._renderer=null,this._onUnload=null}},xt=`in vec2 vMaskCoord;
in vec2 vTextureCoord;

uniform sampler2D uTexture;
uniform sampler2D uMaskTexture;

uniform float uAlpha;
uniform vec4 uMaskClamp;
uniform float uInverse;
uniform float uChannel;

out vec4 finalColor;

void main(void)
{
    float clip = step(3.5,
        step(uMaskClamp.x, vMaskCoord.x) +
        step(uMaskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, uMaskClamp.z) +
        step(vMaskCoord.y, uMaskClamp.w));

    // TODO look into why this is needed
    float npmAlpha = uAlpha;
    vec4 original = texture(uTexture, vTextureCoord);
    vec4 masky = texture(uMaskTexture, vMaskCoord);

    float a;
    if (uChannel == 1.0) {
        a = masky.a * npmAlpha * clip;
    } else {
        float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);
        a = alphaMul * masky.r * npmAlpha * clip;
    }

    if (uInverse == 1.0) {
        a = 1.0 - a;
    }

    finalColor = original * a;
}
`,St=`in vec2 aPosition;

out vec2 vTextureCoord;
out vec2 vMaskCoord;


uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;
uniform mat3 uFilterMatrix;

vec4 filterVertexPosition(  vec2 aPosition )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
       
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord(  vec2 aPosition )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

vec2 getFilterCoord( vec2 aPosition )
{
    return  ( uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}   

void main(void)
{
    gl_Position = filterVertexPosition(aPosition);
    vTextureCoord = filterTextureCoord(aPosition);
    vMaskCoord = getFilterCoord(aPosition);
}
`,Ct=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct MaskUniforms {
  uFilterMatrix:mat3x3<f32>,
  uMaskClamp:vec4<f32>,
  uAlpha:f32,
  uInverse:f32,
  uChannel:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> filterUniforms : MaskUniforms;
@group(1) @binding(1) var uMaskTexture: texture_2d<f32>;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) filterUv : vec2<f32>,
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);
}

fn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>
{
  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}

@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>,
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
   getFilterCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) filterUv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var maskClamp = filterUniforms.uMaskClamp;
    var uAlpha = filterUniforms.uAlpha;

    var clip = step(3.5,
      step(maskClamp.x, filterUv.x) +
      step(maskClamp.y, filterUv.y) +
      step(filterUv.x, maskClamp.z) +
      step(filterUv.y, maskClamp.w));

    var mask = textureSample(uMaskTexture, uSampler, filterUv);
    var source = textureSample(uTexture, uSampler, uv);

    var a: f32;
    if (filterUniforms.uChannel == 1.0) {
        a = mask.a * uAlpha * clip;
    } else {
        var alphaMul = 1.0 - uAlpha * (1.0 - mask.a);
        a = alphaMul * mask.r * uAlpha * clip;
    }

    if (filterUniforms.uInverse == 1.0) {
        a = 1.0 - a;
    }

    return source * a;
}
`,wt=class extends p{constructor(e){let{sprite:t,...n}=e,r=new i(t.texture),a=new y({uFilterMatrix:{value:new m,type:`mat3x3<f32>`},uMaskClamp:{value:r.uClampFrame,type:`vec4<f32>`},uAlpha:{value:1,type:`f32`},uInverse:{value:+!!e.inverse,type:`f32`},uChannel:{value:+(e.channel===`alpha`),type:`f32`}}),o=oe.from({vertex:{source:Ct,entryPoint:`mainVertex`},fragment:{source:Ct,entryPoint:`mainFragment`}}),s=ee.from({vertex:St,fragment:xt,name:`mask-filter`});super({...n,gpuProgram:o,glProgram:s,clipToViewport:!1,resources:{filterUniforms:a,uMaskTexture:t.texture.source}}),this.sprite=t,this._textureMatrix=r}setSprite(e){this.sprite=e;let t=this._getSafeTexture();this._textureMatrix.texture=t,this.resources.uMaskTexture=t.source}set inverse(e){this.resources.filterUniforms.uniforms.uInverse=+!!e}get inverse(){return this.resources.filterUniforms.uniforms.uInverse===1}set channel(e){this.resources.filterUniforms.uniforms.uChannel=+(e===`alpha`)}get channel(){return this.resources.filterUniforms.uniforms.uChannel===1?`alpha`:`red`}apply(e,t,n,r){let i=this._getSafeTexture();this._textureMatrix.texture=i,e.calculateSpriteMatrix(this.resources.filterUniforms.uniforms.uFilterMatrix,this.sprite).prepend(this._textureMatrix.mapCoord),this.resources.uMaskTexture=i.source,e.applyFilter(this,t,n,r)}_getSafeTexture(){let e=this.sprite.texture;return e.destroyed||!e.source||e.source.destroyed?(t(`[MaskFilter] The mask texture was destroyed while the mask is still in use. Remove the mask before destroying its texture.`),f.EMPTY):e}destroy(e=!1){this._textureMatrix.destroy(),super.destroy(e)}};function Tt(e,t,n){let r=(e>>24&255)/255;t[n++]=(e&255)/255*r,t[n++]=(e>>8&255)/255*r,t[n++]=(e>>16&255)/255*r,t[n++]=r}var W=class{constructor(){this.batcherName=`default`,this.topology=`triangle-list`,this.attributeSize=4,this.indexSize=6,this.packAsQuad=!0,this.roundPixels=0,this._attributeStart=0,this._batcher=null,this._batch=null}get blendMode(){return this.renderable.groupBlendMode}get color(){return this.renderable.groupColorAlpha}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.bounds=null}destroy(){this.reset()}},G=class e{constructor(e,t){this.state=ce.for2d(),this._batchersByInstructionSet=Object.create(null),this._activeBatches=Object.create(null),this.renderer=e,this._adaptor=t,this._adaptor.init?.(this)}static getBatcher(e,t){return new this._availableBatchers[e]({maxTextures:t})}buildStart(e){let t=this._batchersByInstructionSet[e.uid];t||(t=this._batchersByInstructionSet[e.uid]=Object.create(null),t.default||(t.default=new U({maxTextures:this.renderer.limits.maxBatchableTextures}))),this._activeBatches=t,this._activeBatch=this._activeBatches.default;for(let e in this._activeBatches)this._activeBatches[e].begin()}addToBatch(t,n){if(this._activeBatch.name!==t.batcherName){this._activeBatch.break(n);let r=this._activeBatches[t.batcherName];r||(r=this._activeBatches[t.batcherName]=e.getBatcher(t.batcherName,this.renderer.limits.maxBatchableTextures),r.begin()),this._activeBatch=r}this._activeBatch.add(t)}break(e){this._activeBatch.break(e)}buildEnd(e){this._activeBatch.break(e);let t=this._activeBatches;for(let e in t){let n=t[e],r=n.geometry;r.indexBuffer.setDataWithSize(n.indexBuffer,n.indexSize,!0),r.buffers[0].setDataWithSize(n.attributeBuffer.float32View,n.attributeSize,!1)}}upload(e){let t=this._batchersByInstructionSet[e.uid];for(let e in t){let n=t[e],r=n.geometry;n.dirty&&(n.dirty=!1,r.buffers[0].update(n.attributeSize*4))}}execute(e){if(e.action===`startBatch`){let t=e.batcher,n=t.geometry,r=t.shader;this._adaptor.start(this,n,r)}this._adaptor.execute(this,e)}destroyInstructionSet(e){let t=this._batchersByInstructionSet[e.uid];if(t){for(let e in t)t[e].destroy();delete this._batchersByInstructionSet[e.uid],this._activeBatches===t&&(this._activeBatches=Object.create(null),this._activeBatch=null)}}destroy(){this.state=null,this.renderer=null,this._adaptor=null;for(let e in this._activeBatches)this._activeBatches[e].destroy();this._activeBatches=null}};G.extension={type:[S.WebGLPipes,S.WebGPUPipes,S.CanvasPipes],name:`batch`},G._availableBatchers=Object.create(null);var K=G;E.handleByMap(S.Batcher,K._availableBatchers),E.add(U);var Et=new a,Dt=class extends o{constructor(){super(),this._placeholderSprite=new u(f.EMPTY),this.filters=[new wt({sprite:this._placeholderSprite,inverse:!1,resolution:`inherit`,antialias:`inherit`})]}get sprite(){return this.filters[0].sprite}set sprite(e){this.filters[0].setSprite(e)}get inverse(){return this.filters[0].inverse}set inverse(e){this.filters[0].inverse=e}get channel(){return this.filters[0].channel}set channel(e){this.filters[0].channel=e}reset(){this._placeholderSprite.texture=f.EMPTY,this.sprite=this._placeholderSprite}},q=class{constructor(e){this._activeMaskStage=[],this._usedEffects=[],this._renderer=e,e.runners.postrender.add(this)}push(e,t,n){let r=this._renderer;if(r.renderPipes.batch.break(n),n.add({renderPipeId:`alphaMask`,action:`pushMaskBegin`,mask:e,inverse:t._maskOptions.inverse,canBundle:!1,maskedContainer:t}),e.inverse=t._maskOptions.inverse,e.channel=t._maskOptions.channel??`red`,e.renderMaskToTexture){let t=e.mask;t.includeInBuild=!0,t.collectRenderables(n,r,null),t.includeInBuild=!1}r.renderPipes.batch.break(n),n.add({renderPipeId:`alphaMask`,action:`pushMaskEnd`,mask:e,maskedContainer:t,inverse:t._maskOptions.inverse,canBundle:!1})}pop(e,t,n){this._renderer.renderPipes.batch.break(n),n.add({renderPipeId:`alphaMask`,action:`popMaskEnd`,mask:e,inverse:t._maskOptions.inverse,canBundle:!1})}execute(e){let t=this._renderer,r=e.mask.renderMaskToTexture;if(e.action===`pushMaskBegin`){let i=l.get(Dt);if(i.inverse=e.inverse,i.channel=e.mask.channel,r){e.mask.mask.measurable=!0;let r=s(e.mask.mask,!0,Et);e.mask.mask.measurable=!1,r.ceil();let a=t.renderTarget.renderTarget.colorTexture.source,o=n.getOptimalTexture({width:r.width,height:r.height,resolution:a._resolution,antialias:a.antialias});t.renderTarget.push({target:o,clear:!0}),t.globalUniforms.push({offset:r,worldColor:4294967295});let c=i.sprite;c.texture=o,c.worldTransform.tx=r.minX,c.worldTransform.ty=r.minY,this._activeMaskStage.push({filterEffect:i,maskedContainer:e.maskedContainer,filterTexture:o})}else i.sprite=e.mask.mask,this._activeMaskStage.push({filterEffect:i,maskedContainer:e.maskedContainer})}else if(e.action===`pushMaskEnd`){let e=this._activeMaskStage[this._activeMaskStage.length-1];r&&(t.type===T.WEBGL&&t.renderTarget.finishRenderPass(),t.renderTarget.pop(),t.globalUniforms.pop()),t.filter.push({renderPipeId:`filter`,action:`pushFilter`,container:e.maskedContainer,filterEffect:e.filterEffect,canBundle:!1})}else if(e.action===`popMaskEnd`){t.filter.pop();let e=this._activeMaskStage.pop();r&&n.returnTexture(e.filterTexture),this._usedEffects.push(e.filterEffect)}}postrender(){let e=this._usedEffects;for(let t=0;t<e.length;t++)l.return(e[t]);e.length=0}destroy(){this.postrender(),this._renderer.runners.postrender.remove(this),this._renderer=null,this._activeMaskStage=null,this._usedEffects=null}};q.extension={type:[S.WebGLPipes,S.WebGPUPipes,S.CanvasPipes],name:`alphaMask`};var Ot=class{constructor(e){this._colorStack=[],this._colorStackIndex=0,this._currentColor=0,this._renderer=e}buildStart(){this._colorStack[0]=15,this._colorStackIndex=1,this._currentColor=15}push(e,t,n){this._renderer.renderPipes.batch.break(n);let r=this._colorStack;r[this._colorStackIndex]=r[this._colorStackIndex-1]&e.mask;let i=this._colorStack[this._colorStackIndex];i!==this._currentColor&&(this._currentColor=i,n.add({renderPipeId:`colorMask`,colorMask:i,canBundle:!1})),this._colorStackIndex++}pop(e,t,n){this._renderer.renderPipes.batch.break(n);let r=this._colorStack;this._colorStackIndex--;let i=r[this._colorStackIndex-1];i!==this._currentColor&&(this._currentColor=i,n.add({renderPipeId:`colorMask`,colorMask:i,canBundle:!1}))}execute(e){this._renderer.colorMask.setMask(e.colorMask)}destroy(){this._renderer=null,this._colorStack=null}};Ot.extension={type:[S.WebGLPipes,S.WebGPUPipes],name:`colorMask`};var kt=class{constructor(e){this._maskHash=new WeakMap,this._renderer=e}push(e,t,n){let r=e,i=this._renderer;i.renderPipes.batch.break(n),i.renderPipes.blendMode.setBlendMode(r.mask,`none`,n),n.add({renderPipeId:`stencilMask`,action:`pushMaskBegin`,mask:e,inverse:t._maskOptions.inverse,canBundle:!1});let a=r.mask;a.includeInBuild=!0,this._maskHash.has(r)||this._maskHash.set(r,{instructionsStart:0,instructionsLength:0});let o=this._maskHash.get(r);o.instructionsStart=n.instructionSize,a.collectRenderables(n,i,null),a.includeInBuild=!1,i.renderPipes.batch.break(n),n.add({renderPipeId:`stencilMask`,action:`pushMaskEnd`,mask:e,inverse:t._maskOptions.inverse,canBundle:!1}),o.instructionsLength=n.instructionSize-o.instructionsStart-1}pop(e,t,n){let r=e,i=this._renderer;i.renderPipes.batch.break(n),i.renderPipes.blendMode.setBlendMode(r.mask,`none`,n),n.add({renderPipeId:`stencilMask`,action:`popMaskBegin`,inverse:t._maskOptions.inverse,canBundle:!1});let a=this._maskHash.get(e);for(let e=0;e<a.instructionsLength;e++)n.instructions[n.instructionSize++]=n.instructions[a.instructionsStart++];n.add({renderPipeId:`stencilMask`,action:`popMaskEnd`,canBundle:!1})}execute(e){let t=this._renderer,n=t.renderTarget.getGpuRenderTarget(t.renderTarget.renderTarget),r=n.maskStackIndex;e.action===`pushMaskBegin`?(t.renderTarget.ensureDepthStencil(),t.stencil.setStencilMode(N.RENDERING_MASK_ADD,r),r++,t.colorMask.setMask(0)):e.action===`pushMaskEnd`?(e.inverse?t.stencil.setStencilMode(N.INVERSE_MASK_ACTIVE,r):t.stencil.setStencilMode(N.MASK_ACTIVE,r),t.colorMask.setMask(15)):e.action===`popMaskBegin`?(t.colorMask.setMask(0),r===0?(t.renderTarget.clear(null,A.STENCIL),t.stencil.setStencilMode(N.DISABLED,r)):t.stencil.setStencilMode(N.RENDERING_MASK_REMOVE,r),r--):e.action===`popMaskEnd`&&(e.inverse?t.stencil.setStencilMode(N.INVERSE_MASK_ACTIVE,r):t.stencil.setStencilMode(N.MASK_ACTIVE,r),t.colorMask.setMask(15)),n.maskStackIndex=r}destroy(){this._renderer=null,this._maskHash=null}};kt.extension={type:[S.WebGLPipes,S.WebGPUPipes],name:`stencilMask`};var J=class{constructor(e){this._renderer=e}updateRenderable(){}destroyRenderable(){}validateRenderable(){return!1}addRenderable(e,t){this._renderer.renderPipes.batch.break(t),t.add(e)}execute(e){e.isRenderable&&e.render(this._renderer)}destroy(){this._renderer=null}};J.extension={type:[S.WebGLPipes,S.WebGPUPipes,S.CanvasPipes],name:`customRender`};function Y(e,t){let n=e.instructionSet,r=n.instructions;for(let e=0;e<n.instructionSize;e++){let n=r[e];t[n.renderPipeId].execute(n)}}var At=class{constructor(e){this._renderer=e}addRenderGroup(e,t){e.isCachedAsTexture?this._addRenderableCacheAsTexture(e,t):this._addRenderableDirect(e,t)}execute(e){e.isRenderable&&(e.isCachedAsTexture?this._executeCacheAsTexture(e):this._executeDirect(e))}destroy(){this._renderer=null}_addRenderableDirect(e,t){this._renderer.renderPipes.batch.break(t),e._batchableRenderGroup&&=(l.return(e._batchableRenderGroup),null),t.add(e)}_addRenderableCacheAsTexture(e,t){let n=e._batchableRenderGroup??=l.get(W);n.renderable=e.root,n.transform=e.root.relativeGroupTransform,n.texture=e.texture,n.bounds=e._textureBounds,t.add(e),this._renderer.renderPipes.blendMode.pushBlendMode(e,e.root.groupBlendMode,t),this._renderer.renderPipes.batch.addToBatch(n,t),this._renderer.renderPipes.blendMode.popBlendMode(t)}_executeCacheAsTexture(e){if(e.textureNeedsUpdate){e.textureNeedsUpdate=!1;let t=new m().translate(-e._textureBounds.x,-e._textureBounds.y);this._renderer.renderTarget.push({target:e.texture,clear:!0,frame:e.texture.frame}),this._renderer.globalUniforms.push({worldTransformMatrix:t,worldColor:4294967295,offset:{x:0,y:0}}),Y(e,this._renderer.renderPipes),this._renderer.renderTarget.finishRenderPass(),this._renderer.renderTarget.pop(),this._renderer.globalUniforms.pop()}e._batchableRenderGroup._batcher.updateElement(e._batchableRenderGroup),e._batchableRenderGroup._batcher.geometry.buffers[0].update()}_executeDirect(e){this._renderer.globalUniforms.push({worldTransformMatrix:e.inverseParentTextureTransform,worldColor:e.worldColorAlpha}),Y(e,this._renderer.renderPipes),this._renderer.globalUniforms.pop()}};At.extension={type:[S.WebGLPipes,S.WebGPUPipes,S.CanvasPipes],name:`renderGroup`};var jt=class{constructor(e){this._renderer=e}addRenderable(e,t){let n=this._getGpuSprite(e);e.didViewUpdate&&this._updateBatchableSprite(e,n),this._renderer.renderPipes.batch.addToBatch(n,t)}updateRenderable(e){let t=this._getGpuSprite(e);e.didViewUpdate&&this._updateBatchableSprite(e,t),t._batcher.updateElement(t)}validateRenderable(e){let t=this._getGpuSprite(e);return!t._batcher.checkAndUpdateTexture(t,e._texture)}_updateBatchableSprite(e,t){t.bounds=e.visualBounds,t.texture=e._texture}_getGpuSprite(e){return e._gpuData[this._renderer.uid]||this._initGPUSprite(e)}_initGPUSprite(e){let t=new W;return t.renderable=e,t.transform=e.groupTransform,t.texture=e._texture,t.bounds=e.visualBounds,t.roundPixels=this._renderer._roundPixels|e._roundPixels,e._gpuData[this._renderer.uid]=t,t}destroy(){this._renderer=null}};jt.extension={type:[S.WebGLPipes,S.WebGPUPipes,S.CanvasPipes],name:`sprite`};var X={};E.handle(S.BlendMode,e=>{if(!e.name)throw Error(`BlendMode extension must have a name property`);X[e.name]=e.ref},e=>{delete X[e.name]});var Mt=class{constructor(e){this._blendModeStack=[],this._isAdvanced=!1,this._filterHash=Object.create(null),this._renderer=e,this._renderer.runners.prerender.add(this)}prerender(){this._activeBlendMode=`normal`,this._isAdvanced=!1}pushBlendMode(e,t,n){this._blendModeStack.push(t),this.setBlendMode(e,t,n)}popBlendMode(e){this._blendModeStack.pop();let t=this._blendModeStack[this._activeBlendMode.length-1]??`normal`;this.setBlendMode(null,t,e)}setBlendMode(e,t,n){let i=e instanceof r;if(this._activeBlendMode===t){this._isAdvanced&&e&&!i&&this._renderableList?.push(e);return}this._isAdvanced&&this._endAdvancedBlendMode(n),this._activeBlendMode=t,e&&(this._isAdvanced=!!X[t],this._isAdvanced&&this._beginAdvancedBlendMode(e,n))}_beginAdvancedBlendMode(e,n){this._renderer.renderPipes.batch.break(n);let i=this._activeBlendMode;if(!X[i]){t(`Unable to assign BlendMode: '${i}'. You may want to include: import 'pixi.js/advanced-blend-modes'`);return}let a=this._ensureFilterEffect(i),o=e instanceof r,s={renderPipeId:`filter`,action:`pushFilter`,filterEffect:a,renderables:o?null:[e],container:o?e.root:null,canBundle:!1};this._renderableList=s.renderables,n.add(s)}_ensureFilterEffect(e){let t=this._filterHash[e];return t||(t=this._filterHash[e]=new o,t.filters=[new X[e]]),t}_endAdvancedBlendMode(e){this._isAdvanced=!1,this._renderableList=null,this._renderer.renderPipes.batch.break(e),e.add({renderPipeId:`filter`,action:`popFilter`,canBundle:!1})}buildStart(){this._isAdvanced=!1}buildEnd(e){this._isAdvanced&&this._endAdvancedBlendMode(e)}destroy(){this._renderer=null,this._renderableList=null;for(let e in this._filterHash)this._filterHash[e].destroy();this._filterHash=null}};Mt.extension={type:[S.WebGLPipes,S.WebGPUPipes,S.CanvasPipes],name:`blendMode`};function Z(e,t){t||=0;for(let n=t;n<e.length&&e[n];n++)e[n]=null}var Nt=new D,Pt=7;function Ft(e,t=!1){It(e);let n=e.childrenToUpdate,r=e.updateTick++;for(let t in n){let i=Number(t),a=n[t],o=a.list,s=a.index;for(let t=0;t<s;t++){let n=o[t];n.parentRenderGroup===e&&n.relativeRenderGroupDepth===i&&Lt(n,r,0)}Z(o,s),a.index=0}if(t)for(let n=0;n<e.renderGroupChildren.length;n++)Ft(e.renderGroupChildren[n],t)}function It(e){let t=e.root,n;if(e.renderGroupParent){let r=e.renderGroupParent;e.worldTransform.appendFrom(t.relativeGroupTransform,r.worldTransform),e.worldColor=te(t.groupColor,r.worldColor),n=t.groupAlpha*r.worldAlpha}else e.worldTransform.copyFrom(t.localTransform),e.worldColor=t.localColor,n=t.localAlpha;n=n<0?0:n>1?1:n,e.worldAlpha=n,e.worldColorAlpha=e.worldColor+((n*255|0)<<24)}function Lt(e,t,n){if(t===e.updateTick)return;e.updateTick=t,e.didChange=!1;let r=e.localTransform;e.updateLocalTransform();let i=e.parent;if(i&&!i.renderGroup?(n|=e._updateFlags,e.relativeGroupTransform.appendFrom(r,i.relativeGroupTransform),n&Pt&&Rt(e,i,n)):(n=e._updateFlags,e.relativeGroupTransform.copyFrom(r),n&Pt&&Rt(e,Nt,n)),!e.renderGroup){let r=e.children,i=r.length;for(let e=0;e<i;e++)Lt(r[e],t,n);let a=e.parentRenderGroup,o=e;o.renderPipeId&&!a.structureDidChange&&a.updateRenderable(o)}}function Rt(e,t,n){if(n&1){e.groupColor=te(e.localColor,t.groupColor);let n=e.localAlpha*t.groupAlpha;n=n<0?0:n>1?1:n,e.groupAlpha=n,e.groupColorAlpha=e.groupColor+((n*255|0)<<24)}n&2&&(e.groupBlendMode=e.localBlendMode===`inherit`?t.groupBlendMode:e.localBlendMode),n&4&&(e.globalDisplayStatus=e.localDisplayStatus&t.globalDisplayStatus),e._updateFlags=0}function zt(e,t){let{list:n}=e.childrenRenderablesToUpdate,r=!1;for(let i=0;i<e.childrenRenderablesToUpdate.index;i++){let e=n[i];if(r=t[e.renderPipeId].validateRenderable(e),r)break}return e.structureDidChange=r,r}var Bt=new m,Vt=class{constructor(e){this._renderer=e}render({container:e,transform:t}){let n=e.parent,r=e.renderGroup.renderGroupParent;e.parent=null,e.renderGroup.renderGroupParent=null;let i=this._renderer,a=Bt;t&&(a.copyFrom(e.renderGroup.localTransform),e.renderGroup.localTransform.copyFrom(t));let o=i.renderPipes;this._updateCachedRenderGroups(e.renderGroup,null),this._updateRenderGroups(e.renderGroup),i.globalUniforms.start({worldTransformMatrix:t?e.renderGroup.localTransform:e.renderGroup.worldTransform,worldColor:e.renderGroup.worldColorAlpha}),Y(e.renderGroup,o),o.uniformBatch&&o.uniformBatch.renderEnd(),t&&e.renderGroup.localTransform.copyFrom(a),e.parent=n,e.renderGroup.renderGroupParent=r}destroy(){this._renderer=null}_updateCachedRenderGroups(e,t){if(e._parentCacheAsTextureRenderGroup=t,e.isCachedAsTexture){if(!e.textureNeedsUpdate)return;t=e}for(let n=e.renderGroupChildren.length-1;n>=0;n--)this._updateCachedRenderGroups(e.renderGroupChildren[n],t);if(e.invalidateMatrices(),e.isCachedAsTexture){if(e.textureNeedsUpdate){let t=e.root.getLocalBounds(),r=this._renderer,i=e.textureOptions.resolution||r.view.resolution,o=e.textureOptions.antialias??r.view.antialias,s=e.textureOptions.scaleMode??`linear`,c=e.texture;t.ceil(),e.texture&&n.returnTexture(e.texture),e.texture=n.getOptimalTexture({width:t.width,height:t.height,resolution:i,antialias:o,scaleMode:s}),e._textureBounds||=new a,e._textureBounds.copyFrom(t),c!==e.texture&&e.renderGroupParent&&(e.renderGroupParent.structureDidChange=!0)}}else e.texture&&=(n.returnTexture(e.texture),null)}_updateRenderGroups(e){let t=this._renderer,n=t.renderPipes;if(e.runOnRender(t),e.instructionSet.renderPipes=n,e.structureDidChange?Z(e.childrenRenderablesToUpdate.list,0):zt(e,n),Ft(e),e.structureDidChange?(e.structureDidChange=!1,this._buildInstructions(e,t)):this._updateRenderables(e),e.childrenRenderablesToUpdate.index=0,t.renderPipes.batch.upload(e.instructionSet),!e.isCachedAsTexture||e.textureNeedsUpdate)for(let t=0;t<e.renderGroupChildren.length;t++)this._updateRenderGroups(e.renderGroupChildren[t])}_updateRenderables(e){let{list:t,index:n}=e.childrenRenderablesToUpdate;for(let r=0;r<n;r++){let n=t[r];n.didViewUpdate&&e.updateRenderable(n)}Z(t,n)}_buildInstructions(e,t){let n=e.root,r=e.instructionSet;r.reset();let i=t.renderPipes?t:t.batch.renderer,a=i.renderPipes;a.batch.buildStart(r),a.blendMode.buildStart(),a.colorMask.buildStart(),n.sortableChildren&&n.sortChildren(),n.collectRenderablesWithEffects(r,i,null),a.batch.buildEnd(r),a.blendMode.buildEnd(r)}};Vt.extension={type:[S.WebGLSystem,S.WebGPUSystem,S.CanvasSystem],name:`renderGroup`};var Ht=class e{constructor(){this.clearBeforeRender=!0,this._backgroundColor=new d(0),this.color=this._backgroundColor,this.alpha=1}init(t){t={...e.defaultOptions,...t},this.clearBeforeRender=t.clearBeforeRender,this.color=t.background||t.backgroundColor||this._backgroundColor,this.alpha=t.backgroundAlpha,this._backgroundColor.setAlpha(t.backgroundAlpha)}get color(){return this._backgroundColor}set color(e){d.shared.setValue(e).alpha<1&&this._backgroundColor.alpha===1&&t(`Cannot set a transparent background on an opaque canvas. To enable transparency, set backgroundAlpha < 1 when initializing your Application.`),this._backgroundColor.setValue(e)}get alpha(){return this._backgroundColor.alpha}set alpha(e){this._backgroundColor.setAlpha(e)}get colorRgba(){return this._backgroundColor.toArray()}destroy(){}};Ht.extension={type:[S.WebGLSystem,S.WebGPUSystem,S.CanvasSystem],name:`background`,priority:0},Ht.defaultOptions={backgroundAlpha:1,backgroundColor:0,clearBeforeRender:!0};var Ut=Ht,Wt={png:`image/png`,jpg:`image/jpeg`,webp:`image/webp`},Gt=class e{constructor(e){this._renderer=e}_normalizeOptions(e,t={}){return e instanceof D||e instanceof f?{target:e,...t}:{...t,...e}}async image(e){let t=fe.get().createImage();return t.src=await this.base64(e),t}async base64(t){t=this._normalizeOptions(t,e.defaultImageOptions);let{format:n,quality:r}=t,i=this.canvas(t);if(i.toBlob!==void 0)return new Promise((e,t)=>{i.toBlob(n=>{if(!n){t(Error(`ICanvas.toBlob failed!`));return}let r=new FileReader;r.onload=()=>e(r.result),r.onerror=t,r.readAsDataURL(n)},Wt[n],r)});if(i.toDataURL!==void 0)return i.toDataURL(Wt[n],r);if(i.convertToBlob!==void 0){let e=await i.convertToBlob({type:Wt[n],quality:r});return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(r.result),r.onerror=n,r.readAsDataURL(e)})}throw Error(`Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented`)}canvas(e){e=this._normalizeOptions(e);let t=e.target,n=this._renderer;if(t instanceof f)return n.texture.generateCanvas(t);let r=n.textureGenerator.generateTexture(e),i=n.texture.generateCanvas(r);return r.destroy(!0),i}pixels(e){e=this._normalizeOptions(e);let t=e.target,n=this._renderer,r=t instanceof f?t:n.textureGenerator.generateTexture(e),i=n.texture.getPixels(r);return t instanceof D&&r.destroy(!0),i}texture(e){return e=this._normalizeOptions(e),e.target instanceof f?e.target:this._renderer.textureGenerator.generateTexture(e)}download(e){e=this._normalizeOptions(e);let t=this.canvas(e),n=document.createElement(`a`);n.download=e.filename??`image.png`,n.href=t.toDataURL(`image/png`),document.body.appendChild(n),n.click(),document.body.removeChild(n)}log(e){let t=e.width??200;e=this._normalizeOptions(e);let n=this.canvas(e),r=n.toDataURL();console.log(`[Pixi Texture] ${n.width}px ${n.height}px`);let i=[`font-size: 1px;`,`padding: ${t}px 300px;`,`background: url(${r}) no-repeat;`,`background-size: contain;`].join(` `);console.log(`%c `,i)}destroy(){this._renderer=null}};Gt.extension={type:[S.WebGLSystem,S.WebGPUSystem,S.CanvasSystem],name:`extract`},Gt.defaultImageOptions={format:`png`,quality:1};var Kt=Gt,qt=class e extends f{static create(t){let{dynamic:n,textureOptions:r,...i}=t;return new e({...r,source:new C(i),dynamic:n??!1})}resize(e,t,n){return this.source.resize(e,t,n),this}},Jt=new w,Yt=new a,Xt=[0,0,0,0],Zt=class{constructor(e){this._renderer=e}generateTexture(e){e instanceof D&&(e={target:e,frame:void 0,textureSourceOptions:{},resolution:void 0});let t=e.resolution||this._renderer.resolution,n=e.antialias||this._renderer.view.antialias,r=e.target,i=e.clearColor;i=i?Array.isArray(i)&&i.length===4?i:d.shared.setValue(i).toArray():Xt;let a=e.frame?.copyTo(Jt)||ne(r,Yt).rectangle,o=e.defaultAnchor&&{defaultAnchor:e.defaultAnchor};a.width=Math.max(a.width,1/t)|0,a.height=Math.max(a.height,1/t)|0;let s=qt.create({...e.textureSourceOptions,width:a.width,height:a.height,resolution:t,antialias:n,textureOptions:o}),c=m.shared.translate(-a.x,-a.y);return this._renderer.render({container:r,transform:c,target:s,clearColor:i}),s.source.updateMipmaps(),s}destroy(){this._renderer=null}};Zt.extension={type:[S.WebGLSystem,S.WebGPUSystem,S.CanvasSystem],name:`textureGenerator`};function Qt(e){let t=!1;for(let n in e)if(e[n]==null){t=!0;break}if(!t)return e;let n=Object.create(null);for(let t in e){let r=e[t];r&&(n[t]=r)}return n}function $t(e){let t=0;for(let n=0;n<e.length;n++)e[n]==null?t++:e[n-t]=e[n];return e.length-=t,e}var en=class e{constructor(e){this._managedResources=[],this._managedResourceHashes=[],this._managedCollections=[],this._ready=!1,this._running=!1,this._renderer=e}init(t){t={...e.defaultOptions,...t},this.maxUnusedTime=t.gcMaxUnusedTime,this._frequency=t.gcFrequency,this.enabled=t.gcActive,this.now=performance.now()}get enabled(){return!!this._handler}set enabled(e){this.enabled!==e&&(e?(this._handler=this._renderer.scheduler.repeat(()=>{this._ready=!0},this._frequency,!1),this._collectionsHandler=this._renderer.scheduler.repeat(()=>{for(let e of this._managedCollections){let{context:t,collection:n,type:r}=e;t[n]=r===`hash`?Qt(t[n]):$t(t[n])}},this._frequency)):(this._renderer.scheduler.cancel(this._handler),this._renderer.scheduler.cancel(this._collectionsHandler),this._handler=0,this._collectionsHandler=0))}prerender({container:e}){this.now=performance.now(),e.renderGroup.gcTick=this._renderer.tick++,this._updateInstructionGCTick(e.renderGroup,e.renderGroup.gcTick)}postrender(){this._ready&&this.enabled&&(this.run(),this._ready=!1)}_updateInstructionGCTick(e,t){e.instructionSet.gcTick=t,e.gcTick=t;for(let n of e.renderGroupChildren)this._updateInstructionGCTick(n,t)}addCollection(e,t,n){this._managedCollections.push({context:e,collection:t,type:n})}addResource(e,t){if(e._gcLastUsed!==-1){e._gcLastUsed=this.now,e._onTouch?.(this.now);return}e._gcData={index:this._managedResources.length,type:t},e._gcLastUsed=this.now,e._onTouch?.(this.now),e.once(`unload`,this.removeResource,this),this._managedResources.push(e)}removeResource(e){let t=e._gcData;if(!t)return;let n=t.index,r=this._managedResources.length-1;if(this._running)this._managedResources[n]=null;else{if(n!==r){let e=this._managedResources[r];this._managedResources[n]=e,e._gcData.index=n}this._managedResources.length--}e._gcData=null,e._gcLastUsed=-1}addResourceHash(e,t,n,r=0){this._managedResourceHashes.push({context:e,hash:t,type:n,priority:r}),this._managedResourceHashes.sort((e,t)=>e.priority-t.priority)}run(){if(this._running)return;let e=performance.now(),t=this._managedResourceHashes,n=this._managedResources;this._running=!0;try{for(let n of t)this.runOnHash(n,e);let r=n.length;for(let t=0;t<r;t++){let r=n[t];r&&this.runOnResource(r,e)}}finally{let e=0;for(let t=0;t<n.length;t++){let r=n[t];r&&(e!==t&&(n[e]=r,r._gcData.index=e),e++)}n.length=e,this._running=!1}}updateRenderableGCTick(e,t){let n=e.renderGroup??e.parentRenderGroup,r=n?.instructionSet?.gcTick??-1;(n?.gcTick??0)===r&&(e._gcLastUsed=t,e._onTouch?.(t))}runOnResource(e,t){e._gcData.type===`renderable`&&this.updateRenderableGCTick(e,t),!(t-e._gcLastUsed<this.maxUnusedTime||!e.autoGarbageCollect)&&(e.off(`unload`,this.removeResource,this),e.unload(),this.removeResource(e))}_createHashClone(e,t){let n=Object.create(null);for(let r in e){if(r===t)break;e[r]!==null&&(n[r]=e[r])}return n}runOnHash(e,t){let{context:n,hash:r,type:i}=e,a=n[r],o=null,s=0;for(let e in a){let n=a[e];if(n===null){s++,s===1e4&&!o&&(o=this._createHashClone(a,e));continue}if(n._gcLastUsed===-1){n._gcLastUsed=t,n._onTouch?.(t),o&&(o[e]=n);continue}if(i===`renderable`&&this.updateRenderableGCTick(n,t),!(t-n._gcLastUsed<this.maxUnusedTime)&&n.autoGarbageCollect){if(i===`renderable`){let e=n,t=e.renderGroup??e.parentRenderGroup;t&&(t.structureDidChange=!0)}n.unload(),n._gcData=null,n._gcLastUsed=-1,o||(s+1===1e4?o=this._createHashClone(a,e):(a[e]=null,s++))}else o&&(o[e]=n)}o&&(n[r]=o)}destroy(){this.enabled=!1,this._managedResources.forEach(e=>{e?.off(`unload`,this.removeResource,this)}),this._managedResources.length=0,this._managedResourceHashes.length=0,this._managedCollections.length=0,this._renderer=null}};en.extension={type:[S.WebGLSystem,S.WebGPUSystem,S.CanvasSystem],name:`gc`,priority:0},en.defaultOptions={gcActive:!0,gcMaxUnusedTime:6e4,gcFrequency:3e4};var tn=en,nn=class{constructor(e){this._stackIndex=0,this._globalUniformDataStack=[],this._uniformsPool=[],this._activeUniforms=[],this._bindGroupPool=[],this._activeBindGroups=[],this._renderer=e}reset(){this._stackIndex=0;for(let e=0;e<this._activeUniforms.length;e++)this._uniformsPool.push(this._activeUniforms[e]);for(let e=0;e<this._activeBindGroups.length;e++)this._bindGroupPool.push(this._activeBindGroups[e]);this._activeUniforms.length=0,this._activeBindGroups.length=0}start(e){this.reset(),this.push(e)}bind({size:e,projectionMatrix:t,worldTransformMatrix:n,worldColor:r,offset:i}){let a=this._renderer.renderTarget.renderTarget,o=this._stackIndex?this._globalUniformDataStack[this._stackIndex-1]:{projectionData:a,worldTransformMatrix:new m,worldColor:4294967295,offset:new ae},s={projectionMatrix:t||this._renderer.renderTarget.projectionMatrix,resolution:e||a.size,worldTransformMatrix:n||o.worldTransformMatrix,worldColor:r||o.worldColor,offset:i||o.offset,bindGroup:null},c=this._uniformsPool.pop()||this._createUniforms();this._activeUniforms.push(c);let l=c.uniforms;l.uProjectionMatrix=s.projectionMatrix,l.uResolution=s.resolution,l.uWorldTransformMatrix.copyFrom(s.worldTransformMatrix),l.uWorldTransformMatrix.tx-=s.offset.x,l.uWorldTransformMatrix.ty-=s.offset.y,Tt(s.worldColor,l.uWorldColorAlpha,0),c.update();let u;this._renderer.renderPipes.uniformBatch?u=this._renderer.renderPipes.uniformBatch.getUniformBindGroup(c,!1):(u=this._bindGroupPool.pop()||new _,this._activeBindGroups.push(u),u.setResource(c,0)),s.bindGroup=u,this._currentGlobalUniformData=s}push(e){this.bind(e),this._globalUniformDataStack[this._stackIndex++]=this._currentGlobalUniformData}pop(){this._currentGlobalUniformData=this._globalUniformDataStack[--this._stackIndex-1],this._renderer.type===T.WEBGL&&this._currentGlobalUniformData.bindGroup.resources[0].update()}get bindGroup(){return this._currentGlobalUniformData.bindGroup}get globalUniformData(){return this._currentGlobalUniformData}get uniformGroup(){return this._currentGlobalUniformData.bindGroup.resources[0]}_createUniforms(){return new y({uProjectionMatrix:{value:new m,type:`mat3x3<f32>`},uWorldTransformMatrix:{value:new m,type:`mat3x3<f32>`},uWorldColorAlpha:{value:new Float32Array(4),type:`vec4<f32>`},uResolution:{value:[0,0],type:`vec2<f32>`}},{isStatic:!0})}destroy(){this._renderer=null,this._globalUniformDataStack.length=0,this._uniformsPool.length=0,this._activeUniforms.length=0,this._bindGroupPool.length=0,this._activeBindGroups.length=0,this._currentGlobalUniformData=null}};nn.extension={type:[S.WebGLSystem,S.WebGPUSystem,S.CanvasSystem],name:`globalUniforms`};var rn=1,an=class{constructor(){this._tasks=[],this._offset=0}init(){de.system.add(this._update,this)}repeat(e,t,n=!0){let r=rn++,i=0;return n&&(this._offset+=1e3,i=this._offset),this._tasks.push({func:e,duration:t,start:performance.now(),offset:i,last:performance.now(),repeat:!0,id:r}),r}cancel(e){for(let t=0;t<this._tasks.length;t++)if(this._tasks[t].id===e){this._tasks.splice(t,1);return}}_update(){let e=performance.now();for(let t=0;t<this._tasks.length;t++){let n=this._tasks[t];if(e-n.offset-n.last>=n.duration){let t=e-n.start;n.func(t),n.last=e}}}destroy(){de.system.remove(this._update,this),this._tasks.length=0}};an.extension={type:[S.WebGLSystem,S.WebGPUSystem,S.CanvasSystem],name:`scheduler`,priority:0};var on=!1;function sn(e){if(!on){if(fe.get().getNavigator().userAgent.toLowerCase().indexOf(`chrome`)>-1){let t=[`%c  %c  %c  %c  %c PixiJS %c v${be} (${e}) http://www.pixijs.com/

`,`background: #E72264; padding:5px 0;`,`background: #6CA2EA; padding:5px 0;`,`background: #B5D33D; padding:5px 0;`,`background: #FED23F; padding:5px 0;`,`color: #FFFFFF; background: #E72264; padding:5px 0;`,`color: #E72264; background: #FFFFFF; padding:5px 0;`];globalThis.console.log(...t)}else globalThis.console&&globalThis.console.log(`PixiJS ${be} - ${e} - http://www.pixijs.com/`);on=!0}}var cn=class{constructor(e){this._renderer=e}init(e){if(e.hello){let e=this._renderer.name;this._renderer.type===T.WEBGL&&(e+=` ${this._renderer.context.webGLVersion}`),sn(e)}}};cn.extension={type:[S.WebGLSystem,S.WebGPUSystem,S.CanvasSystem],name:`hello`,priority:-2},cn.defaultOptions={hello:!1};var ln=class e{constructor(e){this._renderer=e}init(t){t={...e.defaultOptions,...t},this.maxUnusedTime=t.renderableGCMaxUnusedTime}get enabled(){return c(`8.15.0`,`RenderableGCSystem.enabled is deprecated, please use the GCSystem.enabled instead.`),this._renderer.gc.enabled}set enabled(e){c(`8.15.0`,`RenderableGCSystem.enabled is deprecated, please use the GCSystem.enabled instead.`),this._renderer.gc.enabled=e}addManagedHash(e,t){c(`8.15.0`,`RenderableGCSystem.addManagedHash is deprecated, please use the GCSystem.addCollection instead.`),this._renderer.gc.addCollection(e,t,`hash`)}addManagedArray(e,t){c(`8.15.0`,`RenderableGCSystem.addManagedArray is deprecated, please use the GCSystem.addCollection instead.`),this._renderer.gc.addCollection(e,t,`array`)}addRenderable(e){c(`8.15.0`,`RenderableGCSystem.addRenderable is deprecated, please use the GCSystem instead.`),this._renderer.gc.addResource(e,`renderable`)}run(){c(`8.15.0`,`RenderableGCSystem.run is deprecated, please use the GCSystem instead.`),this._renderer.gc.run()}destroy(){this._renderer=null}};ln.extension={type:[S.WebGLSystem,S.WebGPUSystem,S.CanvasSystem],name:`renderableGC`,priority:0},ln.defaultOptions={renderableGCActive:!0,renderableGCMaxUnusedTime:6e4,renderableGCFrequency:3e4};var un=ln,dn=class e{get count(){return this._renderer.tick}get checkCount(){return this._checkCount}set checkCount(e){c(`8.15.0`,`TextureGCSystem.run is deprecated, please use the GCSystem instead.`),this._checkCount=e}get maxIdle(){return this._renderer.gc.maxUnusedTime/1e3*60}set maxIdle(e){c(`8.15.0`,`TextureGCSystem.run is deprecated, please use the GCSystem instead.`),this._renderer.gc.maxUnusedTime=e/60*1e3}get checkCountMax(){return Math.floor(this._renderer.gc._frequency/1e3)}set checkCountMax(e){c(`8.15.0`,`TextureGCSystem.run is deprecated, please use the GCSystem instead.`)}get active(){return this._renderer.gc.enabled}set active(e){c(`8.15.0`,`TextureGCSystem.run is deprecated, please use the GCSystem instead.`),this._renderer.gc.enabled=e}constructor(e){this._renderer=e,this._checkCount=0}init(t){t.textureGCActive!==e.defaultOptions.textureGCActive&&(this.active=t.textureGCActive),t.textureGCMaxIdle!==e.defaultOptions.textureGCMaxIdle&&(this.maxIdle=t.textureGCMaxIdle),t.textureGCCheckCountMax!==e.defaultOptions.textureGCCheckCountMax&&(this.checkCountMax=t.textureGCCheckCountMax)}run(){c(`8.15.0`,`TextureGCSystem.run is deprecated, please use the GCSystem instead.`),this._renderer.gc.run()}destroy(){this._renderer=null}};dn.extension={type:[S.WebGLSystem,S.WebGPUSystem],name:`textureGC`},dn.defaultOptions={textureGCActive:!0,textureGCAMaxIdle:null,textureGCMaxIdle:3600,textureGCCheckCountMax:600};var fn=dn,pn=class e extends le{constructor(e={}){super(),this.uid=ie(`renderTarget`),this.colorAttachments=[],this.dirtyId=0,this.isRoot=!1,this._size=new Float32Array(2),this._managedColorTextures=!1,this._depth=!1,this._stencil=!1,this._colorTextures=null;let t=`colorAttachments`in e?e:this._normalizeOptions(e);if(this.isRoot=t.isRoot??!1,this.label=t.label,this.colorAttachments=t.colorAttachments,this.depthStencilAttachment=t.depthStencilAttachment,this.depthStencilAttachment){let e=this.depthStencilAttachment.texture.format;this._depth||=e.includes(`depth`),this._stencil||=e.includes(`stencil`)}if(this.colorAttachments.length===0&&!this.depthStencilAttachment)throw Error(`[RenderTarget] no color textures or depth textures were provided. Provide a depthStencilTexture or set depth/stencil to true when using colorTextures: 0.`);if(this.colorAttachments.length>0){let e=this.colorTexture;this.resize(e.width,e.height,e._resolution)}this.sizeSource&&this.sizeSource.on(`resize`,this.onSourceResize,this)}_normalizeOptions(t){let n={...e.defaultOptions,...t},r=[],i;if(typeof n.colorTextures==`number`){if(n.colorTextures>0){this._managedColorTextures=!0;for(let e=0;e<n.colorTextures;e++)r.push({texture:new C({width:n.width,height:n.height,resolution:n.resolution,antialias:n.antialias}),loadOp:`clear`,storeOp:`store`})}}else n.colorTextures.forEach(e=>{r.push({texture:e.source,loadOp:`clear`,storeOp:`store`})});let a=n.depthStencilTexture===!0;if(this._depth=!!(n.depth||a),this._stencil=!!(n.stencil||a),n.depthStencilTexture instanceof f||n.depthStencilTexture instanceof C){if(n.isRoot)throw Error(`[RenderTarget] cannot attach a depth-stencil texture to the screen — the canvas owns its own depth/stencil buffers. Render to a texture target instead.`);i={texture:n.depthStencilTexture.source}}else(a&&!n.isRoot||(n.stencil||n.depth)&&r.length===0)&&(i=this._createDepthStencilTexture(n.width,n.height,n.resolution));return{colorAttachments:r,depthStencilAttachment:i,isRoot:n.isRoot,label:n.label}}get size(){let e=this._size;return e[0]=this.pixelWidth,e[1]=this.pixelHeight,e}get width(){return this.sizeSource.width}get height(){return this.sizeSource.height}get pixelWidth(){return this.sizeSource.pixelWidth}get pixelHeight(){return this.sizeSource.pixelHeight}get resolution(){return this.sizeSource._resolution}get colorTextures(){return this._colorTextures||=this.colorAttachments.map(e=>e.texture),this._colorTextures}get depthStencilTexture(){return this.depthStencilAttachment?.texture??null}get depth(){return this._depth}get stencil(){return this._stencil}get colorTexture(){return this.colorAttachments[0]?.texture}get sizeSource(){return this.colorAttachments[0]?.texture??this.depthStencilAttachment?.texture}onSourceResize(e){this.resize(e.width,e.height,e._resolution,!0)}ensureDepthStencilTexture(){this._createDepthStencilTexture(this.sizeSource.width,this.sizeSource.height,this.sizeSource._resolution),this._depth=!0,this._stencil=!0}resize(e,t,n=this.resolution,r=!1){if(this.dirtyId++,this.colorAttachments.forEach((i,a)=>{r&&a===0||i.texture.resize(e,t,n)}),this.depthStencilAttachment){if(r&&this.colorAttachments.length===0)return;this.depthStencilAttachment.texture.resize(e,t,n)}}destroy(){(this.colorAttachments||this.depthStencilAttachment)&&(this.emit(`destroy`,this),this.sizeSource.off(`resize`,this.onSourceResize,this),this._managedColorTextures&&this.colorAttachments.forEach(e=>{e.texture.destroy()}),this.depthStencilAttachment&&(this.depthStencilAttachment.texture.destroy(),delete this.depthStencilAttachment),this.colorAttachments=null,this._colorTextures=null,this.removeAllListeners())}_createDepthStencilTexture(e,t,n){return this.depthStencilAttachment??={texture:new C({width:e,height:t,resolution:n,format:`depth24plus-stencil8`,autoGenerateMipmaps:!1,antialias:!1,mipLevelCount:1})},this.depthStencilAttachment}};pn.defaultOptions={width:0,height:0,resolution:1,colorTextures:1,stencil:!1,depth:!1,antialias:!1,isRoot:!1};var Q=pn,$=new Map;pe.register($);function mn(e,t){if(!$.has(e)){let n=new f({source:new h({resource:e,...t})}),r=()=>{$.get(e)===n&&$.delete(e)};n.once(`destroy`,r),n.source.once(`destroy`,r),$.set(e,n)}return $.get(e)}var hn=class t{get autoDensity(){return this.texture.source.autoDensity}set autoDensity(e){this.texture.source.autoDensity=e}get resolution(){return this.texture.source._resolution}set resolution(e){this.texture.source.resize(this.texture.source.width,this.texture.source.height,e)}constructor(e){this._renderer=e}init(n){n={...t.defaultOptions,...n},n.view&&(c(e,`ViewSystem.view has been renamed to ViewSystem.canvas`),n.canvas=n.view),this.screen=new w(0,0,n.width,n.height),this.canvas=n.canvas||fe.get().createCanvas(),this.antialias=!!n.antialias;let{depth:r,...i}=n;this.texture=mn(this.canvas,i),this.renderTarget=new Q({colorTextures:[this.texture],depth:!!r,isRoot:!0}),this.texture.source.transparent=n.backgroundAlpha<1,this.texture.source.on(`resize`,this._updateScreenSize,this),this.resolution=n.resolution,this._updateScreenSize()}resize(e,t,n){this.texture.source.resize(e,t,n),this.screen.width=this.texture.frame.width,this.screen.height=this.texture.frame.height}destroy(e=!1){(typeof e==`boolean`?e:e?.removeView)&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas),this.texture.source.off(`resize`,this._updateScreenSize,this),n.removeScreen(this._renderer.uid),ue.removeScreen(this._renderer.uid),this.texture.destroy()}_updateScreenSize(){let{pixelWidth:e,pixelHeight:t}=this.texture.source,r=this._renderer.uid;n.setScreenSize(r,e,t),ue.setScreenSize(r,e,t)}};hn.extension={type:[S.WebGLSystem,S.WebGPUSystem,S.CanvasSystem],name:`view`,priority:0},hn.defaultOptions={width:800,height:600,autoDensity:!1,antialias:!1};var gn=[Ut,nn,cn,hn,Vt,tn,fn,Zt,Kt,xe,un,an],_n=[Mt,K,jt,At,q,kt,Ot,J];function vn(e,t,n,r,i,a){let o=a?1:-1;return e.identity(),e.a=1/r*2,e.d=o*(1/i*2),e.tx=-1-t*e.a,e.ty=-o-n*e.d,e}function yn(e){if(e.colorAttachments.length===0)return!1;let t=e.colorTexture.resource;return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement&&document.body.contains(t)}var bn=class{constructor(e){this.rootViewPort=new w,this.viewport=new w,this.onRenderTargetChange=new ge(`onRenderTargetChange`),this.projectionMatrix=new m,this.defaultClearColor=[0,0,0,0],this._renderSurfaceToRenderTargetHash=new Map,this._gpuRenderTargetHash=Object.create(null),this._renderTargetStack=[],this._bindState={target:null,frame:void 0,mipLevel:0,layer:0,flipY:!1},this._bindFrame=new w,this._renderer=e,e.gc.addCollection(this,`_gpuRenderTargetHash`,`hash`)}get renderSurface(){return this._bindState.target}get mipLevel(){return this._bindState.mipLevel}get layer(){return this._bindState.layer}finishRenderPass(){this.adaptor.finishRenderPass(this.renderTarget)}renderStart(e){this._renderTargetStack.length=0,this.push(e),this.rootViewPort.copyFrom(this.viewport),this.rootRenderTarget=this.renderTarget,this.renderingToScreen=yn(this.rootRenderTarget),this.adaptor.prerender?.(this.rootRenderTarget)}postrender(){this.adaptor.postrender?.(this.rootRenderTarget)}bind(e,t=!0,n,r,i=0,a=0,o){let s;`target`in e?s=e:(c(`8.20.0`,`RenderTargetSystem.bind: positional arguments are deprecated, please use an options object instead: bind({ target, clear, clearColor, frame, mipLevel, layer, flipY })`),s={target:e,clear:t,clearColor:n,frame:r,mipLevel:i,layer:a,flipY:o});let l=s.target;t=s.clear??!0,n=s.clearColor,i=(s.mipLevel??0)|0,a=(s.layer??0)|0,o=s.flipY,r=s.frame;let u=this.getRenderTarget(l),d=this.renderTarget!==u||!!u.flipY!=!!o;this.renderTarget=u;let p=this.getGpuRenderTarget(u);(u.pixelWidth!==p.width||u.pixelHeight!==p.height)&&(this.adaptor.resizeGpuRenderTarget(u),p.width=u.pixelWidth,p.height=u.pixelHeight);let m=u.colorAttachments[0]?.texture||u.depthStencilAttachment?.texture,h=this.viewport,g=m.dimension===`3d`?Math.max(m.depth>>i,1):m.depthOrArrayLayers;if(a<0||a>=g)throw Error(`[RenderTargetSystem] layer ${a} is out of bounds (layer count=${g}).`);let _=this._bindState;_.target=l,_.frame=r?this._bindFrame.copyFrom(r):void 0,_.mipLevel=i,_.layer=a,_.flipY=o;let v=Math.max(m.pixelWidth>>i,1),y=Math.max(m.pixelHeight>>i,1);if(!r&&l instanceof f&&(r=l.frame),r){let e=m._resolution,t=1<<Math.max(i,0),n=r.x*e+.5|0,a=r.y*e+.5|0,o=r.width*e+.5|0,s=r.height*e+.5|0,c=Math.floor(n/t),l=Math.floor(a/t),u=Math.ceil(o/t),d=Math.ceil(s/t);c<0&&(u+=c,c=0),l<0&&(d+=l,l=0),c=Math.min(c,v-1),l=Math.min(l,y-1),u=Math.min(u,v-c),d=Math.min(d,y-l),u=Math.max(u,1),d=Math.max(d,1),h.x=c,h.y=l,h.width=u,h.height=d}else h.x=0,h.y=0,h.width=v,h.height=y;return u.flipY=o,vn(this.projectionMatrix,0,0,h.width/m.resolution,h.height/m.resolution,!u.isRoot!=!!u.flipY),this.adaptor.startRenderPass(u,t,n,h,i,a),d&&this.onRenderTargetChange.emit(u),u}getBindState(e){if(!this.renderTarget)throw Error(`[RenderTargetSystem] getBindState is only valid while a render surface is bound`);let t=this._bindState;return e??={},e.target=t.target,e.clear=A.NONE,e.clearColor=void 0,t.frame?e.frame?e.frame.copyFrom(t.frame):e.frame=t.frame.clone():e.frame=void 0,e.mipLevel=t.mipLevel,e.layer=t.layer,e.flipY=!!t.flipY,e}isFrontFaceInverted(e,t){if(!e){if(e=this.renderTarget,!e)return!1;t=e.flipY}return!!t!=(this._renderer.type===T.WEBGL&&!e.isRoot)}get frontFaceInverted(){return c(v,`RenderTargetSystem.frontFaceInverted is deprecated, use isFrontFaceInverted() instead`),this.isFrontFaceInverted()}clear(e,t=A.ALL,n,r=this.mipLevel,i=this.layer){t&&(e&&=this.getRenderTarget(e),this.adaptor.clear(e||this.renderTarget,t,n,this.viewport,r,i))}contextChange(){this._gpuRenderTargetHash=Object.create(null)}push(e,t=A.ALL,n,r,i=0,a=0,o){let s;`target`in e?s=e:(c(`8.20.0`,`RenderTargetSystem.push: positional arguments are deprecated, please use an options object instead: push({ target, clear, clearColor, frame, mipLevel, layer, flipY })`),s={target:e,clear:t,clearColor:n,frame:r,mipLevel:i,layer:a,flipY:o});let l=this.bind(s);return this._renderTargetStack.push({target:s.target,clear:!1,clearColor:void 0,frame:s.frame?s.frame.clone():void 0,mipLevel:s.mipLevel,layer:s.layer,flipY:s.flipY}),l}pop(){this._renderTargetStack.pop();let e=this._renderTargetStack[this._renderTargetStack.length-1];if(!e)throw Error(`[RenderTargetSystem] pop: no previous binding to restore (unbalanced pop)`);return this.bind(e)}getRenderTarget(e){return e.isTexture&&(e=e.source),this._renderSurfaceToRenderTargetHash.get(e)??this._initRenderTarget(e)}copyToTexture(e,t,n,r,i){let a=this.getRenderTarget(e);n.x<0&&(r.width+=n.x,i.x-=n.x,n.x=0),n.y<0&&(r.height+=n.y,i.y-=n.y,n.y=0);let{pixelWidth:o,pixelHeight:s}=a;return r.width=Math.min(r.width,o-n.x),r.height=Math.min(r.height,s-n.y),this.adaptor.copyToTexture(a,t,n,r,i)}copyDepthTexture(e,n,r,i,a={x:0,y:0}){let o=this.getRenderTarget(e);if(!o.depthStencilAttachment){t(`[RenderTargetSystem] copyDepthTexture: the source render target has no depth attachment to copy from`);return}let s=n.source;if(!s.format.includes(`depth`)&&!s.format.includes(`stencil`)){t(`[RenderTargetSystem] copyDepthTexture: the destination texture must have a depth/stencil format (got '${s.format}')`);return}let c=r.x,l=r.y,u=a.x,d=a.y,f=i.width,p=i.height;c<0&&(f+=c,u-=c,c=0),l<0&&(p+=l,d-=l,l=0),f=Math.min(f,o.pixelWidth-c),p=Math.min(p,o.pixelHeight-l),f=Math.min(f,s.pixelWidth-u),p=Math.min(p,s.pixelHeight-d),!(f<=0||p<=0)&&this.adaptor.copyDepthTexture(o,n,{x:c,y:l},{width:f,height:p},{x:u,y:d})}ensureDepthStencil(){if(!this.renderTarget.stencil){if(this.renderTarget.depthStencilTexture){t(`[RenderTargetSystem] a stencil mask is being used, but the render target's depthStencilTexture format '${this.renderTarget.depthStencilTexture.format}' has no stencil aspect, so masking cannot work here. Use a 'depth24plus-stencil8' texture instead.`);return}this.renderTarget._depth=!0,this.renderTarget._stencil=!0,this.adaptor.startRenderPass(this.renderTarget,!1,null,this.viewport,0,this.layer)}}destroy(){this._renderer=null,this._renderSurfaceToRenderTargetHash.forEach((e,t)=>{e===t?e.off(`destroy`,this._onRenderTargetDestroy,this):this._releaseRenderTarget(t,e)}),this._renderSurfaceToRenderTargetHash.clear();for(let e of Object.values(this._gpuRenderTargetHash))e&&this.adaptor.destroyGpuRenderTarget(e);this._gpuRenderTargetHash=Object.create(null)}_initRenderTarget(e){let t=null;if(h.test(e)&&(e=mn(e).source),e instanceof Q)t=e,e.once(`destroy`,this._onRenderTargetDestroy,this);else if(e instanceof C){let n=e.format;t=n.includes(`depth`)||n.includes(`stencil`)?new Q({colorTextures:0,depthStencilTexture:e}):new Q({colorTextures:[e]}),e.source instanceof h&&(t.isRoot=!0),e.once(`destroy`,this._onRenderSurfaceDestroy,this)}return this._renderSurfaceToRenderTargetHash.set(e,t),t}_onRenderSurfaceDestroy(e){let t=this._renderSurfaceToRenderTargetHash.get(e);t&&this._releaseRenderTarget(e,t)}_onRenderTargetDestroy(e){this._renderSurfaceToRenderTargetHash.delete(e),this._releaseGpuRenderTarget(e)}_releaseRenderTarget(e,t){t.destroy(),this._renderSurfaceToRenderTargetHash.delete(e),e.off(`destroy`,this._onRenderSurfaceDestroy,this),this._releaseGpuRenderTarget(t)}_releaseGpuRenderTarget(e){let t=this._gpuRenderTargetHash[e.uid];t&&(this._gpuRenderTargetHash[e.uid]=null,this.adaptor.destroyGpuRenderTarget(t))}getGpuRenderTarget(e){return this._gpuRenderTargetHash[e.uid]||(this._gpuRenderTargetHash[e.uid]=this.adaptor.initGpuRenderTarget(e))}resetState(){this.renderTarget=null,this._bindState.target=null}};export{he as A,Ee as C,j as D,M as E,ye as O,at as S,N as T,dt as _,jt as a,ct as b,q as c,Tt as d,bt as f,ht as g,mt as h,Mt as i,A as k,K as l,_t as m,_n as n,At as o,U as p,gn as r,J as s,bn as t,W as u,pt as v,Ce as w,ot as x,st as y};
//# sourceMappingURL=RenderTargetSystem-D4HOFiW-.js.map