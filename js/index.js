$(function () {
    function arrow() {
        move(".container-arrow").duration("3s").set("bottom", '50px').set("opacity", 0)
            .then().set("bottom", "20px").set("opacity", 1).pop()
            .end()
    }
function sectionone(){
    move('.balloon').set('top', 0).set('opacity', 1).duration(3000).end(function () {
        move('.section1').set('left', "0.4rem").duration(1000).end(function () {
                move('.section2').set('left', "2.95rem").duration(1000).end(function () {
                        move(".frame").set('width', '7.05rem').end(function () {
                            $(".frame").addClass("bounceIn animatedIn")
                            setTimeout(function(){
                                $(".child").addClass("bounceInLeft animatedIn")
                                $(".wrapText").addClass("bounceInRight animatedIn")
                            },1000)

                            }
                        )
                    }
                )
            }
        )

    });
}
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
    $('#ppt').fullpage({
        afterRender: function () {
            //图片的动画
            setInterval(function () {
                arrow()
            }, 500);
            sectionone();
        },
        afterLoad: function (link, index) {
            // console.log(index);
            setInterval(function () {
                arrow()
            }, 500);
            switch (index) {
                case 1 :
                    sectionone()
                    break;
                case 2 :
                    move(".tu1").scale(1).duration("1s").end(function () {
                        move(".tu2").scale(1).duration("1s").end(),
                            move(".tu3").scale(1).duration("1s").end(function () {
                                move(".wenzi2").set("margin-top", 0).duration("1s").set("opacity", 1).end(function () {
                                    move(".qizi").set("opacity", '1').duration("1s").scale(1).end()
                                })
                            })
                    })
                    break;
                case 3:
                    $(".section3-photo-one").addClass("bounceInLeft animatedIn");
                    setTimeout(function(){
                        $(".tu6").addClass("bounceInLeft animatedIn")
                    },1000);
                    setTimeout(function(){
                        $(".wrap-one").addClass("bounceInUp animatedIn")
                    },2000);
                    setTimeout(function(){
                        $(".tu5").addClass("bounceInUp animatedIn")
                    },3000);
                    setTimeout(function(){
                        $(".wrap-two").addClass("bounceInRight animatedIn")
                    },4000);
                    setTimeout(function(){
                        $(".tu4").addClass("bounceInRight animatedIn")
                    },5000);
                    setTimeout(function(){
                        $(".merrychars").addClass("tada animated")
                    },6000);
                    break;
                case 4:
                    // setTimeout(function(){
                    //
                    // },400)
                    move(".sun").set("opacity", "1").end();
                    move(".section4-first-container").duration("1s").set("opacity", "1").set("left", "50%").end(function () {
                        move(".tu7").duration("1s").set("left", "0.14rem").end(function () {
                            move(".section4-second-container").duration("1s").set("opacity", "1").set("left", "50%").end(function () {
                                move(".tu8").set("left", '0.14rem').duration("1s").end(function () {
                                    move(".animal").duration("1s").set("bottom", "0").set("opacity", "1").end()
                                })
                            })

                        })
                    })
                    break;
                case 5:
                    move(".onea").duration("1s").set("left", "0").end(function () {
                        move(".oneb").duration("1s").set("right", 0).end(function () {
                            move(".onec").duration("1s").set("left", "0").end(function () {
                                move(".oned").duration("1s").set("right", 0).end(function () {
                                    move(".star").duration("1s").set("opacity", "1").scale(1).end(function () {
                                        move(".childImg").duration("1s").set("left", 0).end(),
                                            move(".text").duration("1s").set("right", "0.15rem").end()
                                    })
                                })
                            })
                        })
                    })
                    break;
                case 6:
                    $(".header").addClass("tada animated");
                    setTimeout(function () {
                        move(".beijing1b").set("left", '0').end(function () {
                            move(".tu13").duration("1s").rotate(0).set("opacity", '1').end(function () {
                                move(".jiaobu1").set("opacity", "1").duration("1s").end(function () {
                                    move(".twrapper").set("right", "-2.7rem").end(function () {
                                        move(".tu14").set("opacity","1").rotate(0).duration("1s").end(function(){
                                            move(".jiaobu2").set("opacity","1").duration("1s").end()
                                        })
                                    })
                                })
                            })
                        })
                    }, 1000)

                    break;
                case 7:
                    move('.balloon1').set('top', 0).set('opacity', 1).duration(3000).end(function () {
                        move('.photo1a').scale(1).duration(1000).end(function () {
                                move('.photo2a').scale(1).end(function () {
                                        move(".framea").scale(1).set("opacity","1").duration("1s").end(function () {
                                                $(".childa").addClass("animated rotateInDownLeft");

                                                setTimeout(function(){
                                                    $(".wrapTexta").addClass("animated rotateInUpRight")
                                                },1000)

                                            }
                                        )
                                    }
                                )
                            }
                        )

                    });
                    break;
                case 8:
                    $(".tu1a").addClass("bounceInDown  animated");
                    setTimeout(function(){
                        $(".tu2a").addClass("bounceInUp  animated")
                    },1000)
                    setTimeout(function(){
                        $(".tu3a").addClass("bounceInUp  animated")
                    },2000)
                    setTimeout(function(){
                        move(".wenzi2a").set("margin-top", 0).set("opacity", 1).end(
                            function(){
                                move(".qizia").set("width","7.39rem").end(function(){
                                    $(".qizia").addClass("bounceIn  animated")
                                    setTimeout(function(){
                                        $(".wenzi2a").addClass("tada animated")
                                    },1000)
                                })

                            }
                        )
                    },3000)
                    break;

            }
        },
        onLeave: function (index) {
            switch (index) {
                case 1:
                    move('.balloon')
                        .set('top', ' -6rem').set('opacity', 0).end(function () {
                        move('.section1').set('left', "-5.24rem").end(function () {
                                move('.section2').set('left', "12rem").end(function () {
                                        move(".frame").set('opacity', '0').set("width","100rem").end(function () {
                                            $(".frame").removeClass("bounceIn animated")
                                            $(".child").removeClass("bounceInLeft animatedIn")
                                            $(".wrapText").removeClass("bounceInRight animatedIn")
                                            }
                                        )
                                    }
                                )
                            }
                        )

                    });
                    break;
                case 2:
                    move(".tu1").scale(0).end(function () {
                        move(".tu2").scale(0).end(),
                            move(".tu3").scale(0).end(function () {
                                move(".wenzi2").set("margin-top", "9rem").set("opacity", 0).end(function () {
                                    move(".qizi").set("opacity", '0').scale(5).end()
                                })
                            })
                    })
                    break;
                case 3:
                    $(".section3-photo-one").removeClass("bounceInLeft animatedIn");
                        $(".tu6").removeClass("bounceInLeft animatedIn")
                        $(".wrap-one").removeClass("bounceInUp animatedIn")
                        $(".tu5").removeClass("bounceInUp animatedIn")
                        $(".wrap-two").removeClass("bounceInRight animatedIn")
                        $(".tu4").removeClass("bounceInRight animatedIn")
                        $(".merrychars").removeClass("tada animated")
                    break;
                case 4 :
                    move(".sun").set("opacity", "0").end();
                    move(".section4-first-container").set("opacity", "0").set("left", "-50%").end(function () {
                        move(".tu7").set("left", "-7rem").end(function () {
                            move(".section4-second-container").set("opacity", "1").set("left", "150%").end(function () {
                                move(".tu8").set("left", '8rem').end(function () {
                                    move(".animal").set("bottom", "-7rem").set("opacity", "0").end()
                                })
                            })

                        })
                    })
                    break;
                case 5:
                    move(".onea").set("left", "-7rem").end(function () {
                        move(".oneb").set("right", "-7rem").end(function () {
                            move(".onec").set("left", "-7rem").end(function () {
                                move(".oned").set("right", "-7rem").end(function () {
                                    move(".star").set("opacity", "0").scale(5).end(function () {
                                        move(".childImg").set("left", "-7rem").end(),
                                            move(".text").set("right", "-7rem").end()
                                    })
                                })
                            })
                        })
                    })
                    break;
                case 6:
                    $(".header").removeClass("tada animated");
                        move(".beijing1b").set("left", '-7rem').end(function () {
                            move(".tu13").rotate(18).set("opacity", '0').end(function () {
                                move(".jiaobu1").set("opacity", "0").end(function () {
                                    move(".twrapper").set("right", "-8.7rem").end(function () {
                                        move(".tu14").set("opacity","0").rotate(83).end(function(){
                                            move(".jiaobu2").set("opacity","0").end()
                                        })
                                    })
                                })
                            })
                        })
                    break;
                case 7:
                    move('.balloon1').set('top', "-6rem").set('opacity', 0).end(function () {
                        move('.photo1a').scale(0).end(function () {
                                move('.photo2a').scale(0).end(function () {
                                        move(".framea").scale(5).set("opacity","0").end(function () {
                                                $(".childa").removeClass("animated rotateInDownLeft");
                                                    $(".wrapTexta").removeClass("animated rotateInUpRight")
                                            }
                                        )
                                    }
                                )
                            }
                        )

                    });
                    break;
                case 8:
                    $(".tu1a").removeClass("bounceInDown  animated");
                        $(".tu2a").removeClass("bounceInUp  animated")
                        $(".tu3a").removeClass("bounceInUp  animated")
                        move(".wenzi2a").set("margin-top","6.44rem").set("opacity", 0).end(
                            function(){
                                move(".qizia").set("width","0").end(function(){
                                    $(".qizia").removeClass("bounceIn  animated")
                                        $(".wenzi2a").removeClass("tada animated")
                                })

                            }
                        )
                    break;

            }
        }
    });
})