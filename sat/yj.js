function CalculateAZ(SATLONG,SATLAT) {
    var DTOR, RTOD, A, B, F, RSAT, ESHEIGHT, ESLAT, ESLONG, SATLAT, SATLONG, XS, YS, ZS, EE, BETA, RHO;
    var TXS, TYS, TZS, DIST, AZ, XS2, YS2, ZS2, TXS2, TYS2, TZS2, DIST2, RANGE;

    DTOR=Math.PI/180; RTOD=180/Math.PI; A=6378.3880;    B=6356.9120;    F=1/297;
    RSAT=Math.pow((6028.82*((24*60)-4)), 2/3);
    /*Check(window.document.Form.ESH, "0");
    Check(window.document.Form.ESLA, "0");
    Check(window.document.Form.ESLO, "0");
    Check(window.document.Form.SATLA, "0");
    Check(window.document.Form.SATLO, "0");*/
    //以北京为观测点
    ESHEIGHT=0;//高度
    ESLAT=39.9059;//维度
    ESLONG=116.3943;//经度
    /*SATLAT=1.7282723;
    SATLONG=58.78332;*/
    XS=RSAT*Math.cos(DTOR*SATLAT)*Math.cos(DTOR*SATLONG);
    XS2=RSAT*Math.cos(-SATLAT*DTOR)*Math.cos(SATLONG*DTOR);
    YS=RSAT*Math.cos(DTOR*SATLAT)*Math.sin(DTOR*SATLONG);
    YS2=RSAT*Math.cos(-SATLAT*DTOR)*Math.sin(SATLONG*DTOR);
    ZS=RSAT*Math.sin(DTOR*SATLAT);
    ZS2=-RSAT*Math.sin(DTOR*SATLAT);
    EE=2*F - Math.pow(F, 2);
    BETA=Math.atan((1-EE)*Math.tan(ESLAT*DTOR));
    RHO=A*(1-F)/Math.sqrt(1-(2-F)*F*Math.cos(ESLAT*DTOR)*Math.cos(ESLAT*DTOR));
    TXS=(XS*Math.cos(ESLONG*DTOR)+YS*Math.sin(ESLONG*DTOR)-RHO*Math.cos(BETA))*Math.sin(ESLAT*DTOR)-(ZS-RHO*Math.sin(BETA))*Math.cos(ESLAT*DTOR);
    TXS2=(XS2*Math.cos(ESLONG*DTOR)+YS2*Math.sin(ESLONG*DTOR)-RHO*Math.cos(BETA))*Math.sin(ESLAT*DTOR)-(ZS2-RHO*Math.sin(BETA))*Math.cos(ESLAT*DTOR);
    TYS=-XS*Math.sin(ESLONG*DTOR)+YS*Math.cos(ESLONG*DTOR);
    TYS2=-XS2*Math.sin(ESLONG*DTOR)+YS2*Math.cos(ESLONG*DTOR);
    TZS=(XS*Math.cos(ESLONG*DTOR)+YS*Math.sin(ESLONG*DTOR)-RHO*Math.cos(BETA))*Math.cos(ESLAT*DTOR)+(ZS-RHO*Math.sin(BETA))*Math.sin(ESLAT*DTOR)-(ESHEIGHT/1000);
    TZS2=(XS2*Math.cos(ESLONG*DTOR)+YS2*Math.sin(ESLONG*DTOR)-RHO*Math.cos(BETA))*Math.cos(ESLAT*DTOR)+(ZS2-RHO*Math.sin(BETA))*Math.sin(ESLAT*DTOR)-(ESHEIGHT/1000);
    DIST=Math.sqrt(TXS*TXS+TYS*TYS+TZS*TZS);
    DIST2=Math.sqrt(TXS2*TXS2+TYS2*TYS2+TZS2*TZS2)
    AZ=180-RTOD*ATAN2(TXS,TYS);
    EL=Math.asin(TZS/DIST)*RTOD;
    RANGE=Math.max(DIST, DIST2);

    var m=[];
    m[0]=round(AZ, 3);//方位角
    m[1]=round(EL, 3);//仰角
    //round(RANGE, 3);//最大距离，单位km
    return m;
}

function Check(obRef, def) {
    if ((obRef.value == null) || (obRef.value == "")) {
        obRef.value = def;
    }
}

function ATAN2(x, y) {
    var tmp;
    if (y == 0) {
        if (x > 0) {
            tmp = 0;
        } else {
            if (x < 0) {
                tmp = Math.PI;
            } else {
                tmp = 1/0;
            }
        }
    } else {
        if (y > 0) {
            tmp = (Math.PI/2) - Math.atan(x/y);
        } else {
            tmp = -(Math.PI/2) - Math.atan(x/y);
        }
    }
    return tmp
}

function round(val, places) {
    val = val * Math.pow(10, places)
    val = Math.round(val)
    val = val / Math.pow(10, places)
    return val
}

var am = [];
am=CalculateAZ(136.61271431981567,61.53907444885711);
console.info("仰角"+am[1]);
console.info("方位角"+am[0]);