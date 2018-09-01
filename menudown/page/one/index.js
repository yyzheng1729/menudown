Page({
    data: {
        content: [],
        px: [],
        pxopen: false,
        pxshow: false,
        active:true,
        imgUrl: "../../images/down.png"
    },
    onLoad: function() {
        this.setData({
            px: ['>默认排序', '>离我最近']
        })
    },
    listpx: function(e) {
        console.log(e)
        if (this.data.pxopen) {
            this.setData({
                pxopen: false,
                pxshow: false,
                active: true,
                imgUrl: "../../images/down.png"
            })
        } else {
            this.setData({
                content: this.data.px,
                pxopen: true,
                pxshow: false,
                active:false,
                imgUrl: "../../images/up.png"
            })
        }
        console.log(e.target)
    }
})