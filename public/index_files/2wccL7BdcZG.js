;/*FB_PKG_DELIM*/

__d("PolarisClipsItemModal.react",["IGRouter_DO_NOT_USE.react","PolarisClipsHelpers","PolarisLinkBuilder","PolarisPost.react","PolarisPostModal.react","PolarisPostVariants","nullthrows","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useRef;function a(a){var b=a.analyticsContext,e=a.clips,f=a.history,g=a.onClose,h=a.onOpen;a=a.postId;f=j(f.location.pathname);var k=d("PolarisClipsHelpers").getClipItemFromPostID(e,a);if(!k)return null;e=e.map(function(a){return c("nullthrows")((a=a.media)==null?void 0:a.pk)});return i.jsx(c("PolarisPostModal.react"),{analyticsContext:b,combinedPostIds:e,dimensions:d("PolarisClipsHelpers").getClipDimensionsFromItemDict(k),mediaLinkBuilder:d("PolarisLinkBuilder").buildClipsMediaLink,modalEntryPath:f.current,onClose:g,onOpen:h,postCode:c("nullthrows")((e=k.media)==null?void 0:e.code),postId:a,children:i.jsx(c("PolarisPost.react"),{analyticsContext:b+"Modal",autoplay:!0,id:a,isVisible:!0,variant:d("PolarisPostVariants").VARIANTS.flexible,visiblePosition:0})})}a.displayName=a.name+" [from "+f.id+"]";b=d("IGRouter_DO_NOT_USE.react").withIGRouter(a);g["default"]=b}),98);
__d("PolarisClipsTabHelpers",["IGDSThemeConstantsHelpers","PolarisDsaQEHelpers","PolarisIsLoggedIn","PolarisNavigationHelpers","gkx"],(function(a,b,c,d,e,f,g){"use strict";var h=12,i=60,j=d("IGDSThemeConstantsHelpers").getNumericValue("nav-narrow-screen-min"),k=d("IGDSThemeConstantsHelpers").getNumericValue("revamp-nav-bottom-toolbar-height"),l=60,m=32;function n(){var a;a=(a=(a=document.documentElement)==null?void 0:a.clientWidth)!=null?a:0;return a-d("PolarisNavigationHelpers").getNavBarDesktopWidth()-2*m-i-h}function o(a,b){var e,f;b===void 0&&(b=!1);e=(e=(e=document.documentElement)==null?void 0:e.clientHeight)!=null?e:0;f=(f=(f=document.documentElement)==null?void 0:f.clientWidth)!=null?f:0;var g=n();g=g*(16/9);f=f<j?k+(b?l:0):!d("PolarisIsLoggedIn").isLoggedIn()&&c("gkx")("4555")?l:0;e=e*.9-f;a===!0&&!b&&(e-=78);g>e&&(g=e);return g}var p=1200;function a(a){if(a==null){var b=o(d("PolarisDsaQEHelpers").hasTabbedReelsHeader());return Math.min(b,p)}b=a.getBoundingClientRect().top;a=32;return Math.min(b-a,p)}var q={container:{display:"x78zum5",maxHeight:"xedcshv",$$css:!0},ufi:{justifyContent:"x13a6bvl",marginStart:"x16n37ib",width:"x1247r65",$$css:!0}};function b(){return{container:q.container,ufi:q.ufi}}e=1500;g.getReelMediaContainerHeight=o;g.getMaxPopoverHeight=a;g.getClipsContainerStyles=b;g.WINDOW_RESIZE_THROTTLE=e}),98);
__d("PolarisSponsoredPersistentCTAThumbnail.react",["fbt","PolarisThumbnail.react","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(a){var b=d("react-compiler-runtime").c(3);a=a.thumbnailImageSrc;var e;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(e=h._(/*BTDS*/"__JHASH__ePItbjSnMcH__JHASH__"),b[0]=e):e=b[0];b[1]!==a?(e=j.jsx(c("PolarisThumbnail.react"),{alt:e,dimension:32,src:a}),b[1]=a,b[2]=e):e=b[2];return e}g["default"]=a}),226);
__d("PolarisDesktopSponsoredPersistentCTA.react",["CometErrorBoundary.react","InstagramODS","InstagramWebAdEventsAuditFalcoEvent","PolarisClickEventLoggerProvider.react","PolarisClipsTabHelpers","PolarisNavigationHelpers","PolarisPostFooterCTA.react","PolarisPostUtils","PolarisSponsoredPersistentCTAThumbnail.react","PolarisTrackingCodeProvider.react","PolarisTrackingNodeProvider.react","getPolarisPostIdFromNativeId","polarisAdsSelectors.react","polarisPostSelectors","react","react-compiler-runtime","usePolarisSelector","usePolarisSponsoredPostCTAFooterDominantColor","useThrottled"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useEffect,k=b.useLayoutEffect,l=b.useState;function m(a){var b=d("react-compiler-runtime").c(29),e=a.ctaAdditionalAnimation,f=a.ctaLinkText,g=a.domColor,h=a.entryPoint,m=a.externalURL,n=a.mediaId,o=a.mpk,p=a.post,q=a.socialContextType,r=a.thumbnailImageSrc,s=a.trackingToken;a=l(0);var t=a[0],u=a[1];b[0]!==n||b[1]!==p?(a={isMediaRendered:!0,mediaId:n,post:p},b[0]=n,b[1]=p,b[2]=a):a=b[2];n=c("usePolarisSponsoredPostCTAFooterDominantColor")(a);p=n.ctaFooterViewpointRef;b[3]===Symbol["for"]("react.memo_cache_sentinel")?(a=function(){u(d("PolarisNavigationHelpers").getNavBarDesktopWidth())},b[3]=a):a=b[3];var v=c("useThrottled")(a,d("PolarisClipsTabHelpers").WINDOW_RESIZE_THROTTLE);b[4]!==v?(n=function(){v();window.addEventListener("resize",v);return function(){window.removeEventListener("resize",v)}},a=[v],b[4]=v,b[5]=n,b[6]=a):(n=b[5],a=b[6]);k(n,a);b[7]!==h||b[8]!==q||b[9]!==s?(n=function(){c("InstagramODS").incr("web.ads.feed.link_click"),c("InstagramWebAdEventsAuditFalcoEvent").log(function(){return{client_token:s,event:"persistent_cta_click",social_context_type:q}}),h!==null&&h==="story"?c("InstagramODS").incr("web.ads.story.desktop_persistent_link_click"):c("InstagramODS").incr("web.ads.feed.persistent_link_click")},b[7]=h,b[8]=q,b[9]=s,b[10]=n):n=b[10];var w=n;b[11]!==h?(a=function(){h!==null&&h==="story"?c("InstagramODS").incr("web.ads.story.desktop_persistent_cta_rendered"):c("InstagramODS").incr("web.ads.feed.persistent_cta_rendered")},n=[h],b[11]=h,b[12]=a,b[13]=n):(a=b[12],n=b[13]);j(a,n);b[14]!==e||b[15]!==f||b[16]!==g||b[17]!==m||b[18]!==w||b[19]!==t||b[20]!==r?(a=function(a){return i.jsx("div",{className:"xjnlgov xtzzx4i xixxii4",ref:a,style:{transform:"translateX(calc(-50% + "+t/2+"px))"},children:i.jsx(c("PolarisPostFooterCTA.react"),{ctaAdditionalAnimation:e,ctaDominantColor:g,disableAnimation:!0,externalURL:m,forceBottomBorder:!1,icon:i.jsx(c("PolarisSponsoredPersistentCTAThumbnail.react"),{thumbnailImageSrc:r}),isActive:!0,isForAd:!0,isForPersistentCta:!0,onClick:w,showChevron:!0,showRoundedBorder:!0,text:f})})},b[14]=e,b[15]=f,b[16]=g,b[17]=m,b[18]=w,b[19]=t,b[20]=r,b[21]=a):a=b[21];b[22]!==p||b[23]!==a?(n=i.jsx(c("PolarisClickEventLoggerProvider.react"),{children:i.jsx(c("PolarisTrackingNodeProvider.react"),{ref:p,trackingNode:86,children:a})}),b[22]=p,b[23]=a,b[24]=n):n=b[24];b[25]!==o||b[26]!==n||b[27]!==s?(p=i.jsx(c("PolarisTrackingCodeProvider.react"),{isSponsored:!0,m_pk:o,trackingToken:s,children:n}),b[25]=o,b[26]=n,b[27]=s,b[28]=p):p=b[28];return p}function a(a){var b=d("react-compiler-runtime").c(25),e=a.entryPoint,f=a.mpk,g;b[0]!==f?(g=c("getPolarisPostIdFromNativeId")(f),b[0]=f,b[1]=g):g=b[1];var h=g;f=d("polarisAdsSelectors.react").useFeedAdInfo(h,o);g=d("polarisAdsSelectors.react").useStoryAdInfo(h,n);g=e!==null&&e==="story"?g:f;b[2]!==h?(f=function(a){return d("polarisPostSelectors").getPostById(a,h)},b[2]=h,b[3]=f):f=b[3];f=c("usePolarisSelector")(f);var j=f.isSidecar,k=f.src,l=f.thumbnailSrc;if(b[4]!==j||b[5]!==f){var p;p=j===!0?(p=d("PolarisPostUtils").getCurrentSidecarItemFromPost(f,0))==null?void 0:p.id:f.id;b[4]=j;b[5]=f;b[6]=p}else p=b[6];j=p;l=(p=l)!=null?p:k;if(j==null||l==null)return null;if(b[7]!==(g==null?void 0:g.ctaItems)||b[8]!==j){p=g==null?void 0:(p=g.ctaItems)==null?void 0:(k=p.get(j))==null?void 0:k.ctaLinkUrl;b[7]=g==null?void 0:g.ctaItems;b[8]=j;b[9]=p}else p=b[9];k=p;if(b[10]!==(g==null?void 0:g.ctaItems)||b[11]!==j){p=g==null?void 0:(p=g.ctaItems)==null?void 0:(p=p.get(j))==null?void 0:p.ctaLinkText;b[10]=g==null?void 0:g.ctaItems;b[11]=j;b[12]=p}else p=b[12];p=p;if(b[13]!==(g==null?void 0:g.ctaItems)||b[14]!==j){var q;q=g==null?void 0:(q=g.ctaItems)==null?void 0:(q=q.get(j))==null?void 0:q.ctaDominantColor;b[13]=g==null?void 0:g.ctaItems;b[14]=j;b[15]=q}else q=b[15];g=q;if(k==null||p==null)return null;b[16]!==p||b[17]!==g||b[18]!==e||b[19]!==k||b[20]!==j||b[21]!==f||b[22]!==a||b[23]!==l?(q=i.jsx(c("CometErrorBoundary.react"),{children:i.jsx(m,babelHelpers["extends"]({},a,{ctaLinkText:p,domColor:g,entryPoint:e,externalURL:k,mediaId:j,post:f,thumbnailImageSrc:l}))}),b[16]=p,b[17]=g,b[18]=e,b[19]=k,b[20]=j,b[21]=f,b[22]=a,b[23]=l,b[24]=q):q=b[24];return q}function n(a){return a}function o(a){return a}g["default"]=a}),98);
__d("PolarisProfileTabTaggedPhotosConstants",[],(function(a,b,c,d,e,f){"use strict";a="tagged";f.TAGGED_TAB_ID=a}),66);
__d("PolarisInstantPostModal.react",["PolarisPostModalInternal.react","PolarisProfileTabTaggedPhotosConstants","polarisPostModalHelpers","polarisPostSelectors","react","react-compiler-runtime","usePolarisSelector"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b,e=d("react-compiler-runtime").c(6),f=!1,g=d("polarisPostModalHelpers").getModalPageIdFromAnalyticsContext(a.analyticsContext)==="profilePageModal";b=((b=a.modalEntryPath)==null?void 0:b.endsWith("/"+d("PolarisProfileTabTaggedPhotosConstants").TAGGED_TAB_ID+"/"))===!0;g=g&&!b;var h;e[0]!==a.postId?(h=function(b){return d("polarisPostSelectors").getPostOrNullById(b,a.postId)},e[0]=a.postId,e[1]=h):h=e[1];h=c("usePolarisSelector")(h);(h==null||b&&h.isVideo===!0)&&(f=!0);e[2]!==a||e[3]!==f||e[4]!==g?(b=i.jsx(c("PolarisPostModalInternal.react"),babelHelpers["extends"]({},a,{showLoadingShimmer:f,skipMediaInfo:g})),e[2]=a,e[3]=f,e[4]=g,e[5]=b):b=e[5];return b}g["default"]=a}),98);
__d("PolarisMediaBrowserPostModal.react",["invariant","PolarisInstantPostModal.react","PolarisIsLoggedInDesktop","PolarisPost.react","PolarisPostVariants","PolarisReactRedux.react","PolarisRoutes","isStringNullOrEmpty","nullthrows","polarisPostSelectors","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||(i=d("react")),k=i.useEffect;function a(a){var b=d("react-compiler-runtime").c(28),e=a.analyticsContext,f=a.combinedPosts,g=a.mediaLinkBuilder,i=a.modalEntryPath,n=a.onClose,o=a.onOpen,p=a.postId,q=d("PolarisReactRedux.react").useSelector(m);b[0]!==f?(a=f.map(l),b[0]=f,b[1]=a):a=b[1];f=a;b[2]!==p?(a=function(a){return d("polarisPostSelectors").getPostOrNullById(a,p)},b[2]=p,b[3]=a):a=b[3];var r=d("PolarisReactRedux.react").useSelector(a),s;b[4]!==q||b[5]!==n||b[6]!==p||b[7]!==r?(a=function(){r==null&&(q.includes(p)||h(0,51476),n())},s=[q,n,r,p],b[4]=q,b[5]=n,b[6]=p,b[7]=r,b[8]=a,b[9]=s):(a=b[8],s=b[9]);k(a,s);if(r==null)return null;a=r.dimensions;s=c("isStringNullOrEmpty")(i)?d("PolarisRoutes").FEED_PATH:i;b[10]!==r.code?(i=c("nullthrows")(r.code),b[10]=r.code,b[11]=i):i=b[11];var t=e+"Modal",u;b[12]===Symbol["for"]("react.memo_cache_sentinel")?(u=d("PolarisIsLoggedInDesktop").isLoggedInDesktop(),b[12]=u):u=b[12];b[13]!==p||b[14]!==r.code||b[15]!==t?(u=j.jsx(c("PolarisPost.react"),{analyticsContext:t,autoplay:u,id:p,isVisible:!0,shortcode:r.code,testid:void 0,variant:d("PolarisPostVariants").VARIANTS.flexible,visiblePosition:0}),b[13]=p,b[14]=r.code,b[15]=t,b[16]=u):u=b[16];b[17]!==e||b[18]!==f||b[19]!==g||b[20]!==n||b[21]!==o||b[22]!==p||b[23]!==r.dimensions||b[24]!==u||b[25]!==s||b[26]!==i?(t=j.jsx(c("PolarisInstantPostModal.react"),{analyticsContext:e,combinedPostIds:f,dimensions:a,mediaLinkBuilder:g,modalEntryPath:s,onClose:n,onOpen:o,postCode:i,postId:p,children:u}),b[17]=e,b[18]=f,b[19]=g,b[20]=n,b[21]=o,b[22]=p,b[23]=r.dimensions,b[24]=u,b[25]=s,b[26]=i,b[27]=t):t=b[27];return t}function l(a){return a.id}function m(a){return d("polarisPostSelectors").getDeletedIds(a)}g["default"]=a}),98);
__d("PolarisMobileSponsoredPersistentCTA.react",["CometErrorBoundary.react","InstagramODS","InstagramWebAdEventsAuditFalcoEvent","PolarisClickEventLoggerProvider.react","PolarisPostFooterCTA.react","PolarisPostUtils","PolarisSponsoredPersistentCTAThumbnail.react","PolarisTrackingCodeProvider.react","PolarisTrackingNodeProvider.react","getPolarisPostIdFromNativeId","polarisAdsSelectors.react","polarisPostSelectors","react","react-compiler-runtime","usePolarisSelector","usePolarisSponsoredPostCTAFooterDominantColor"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useEffect,k=60;function l(a){var b=d("react-compiler-runtime").c(27),e=a.bottomOffset,f=a.ctaAdditionalAnimation,g=a.ctaLinkText,h=a.domColor,l=a.entryPoint,m=a.externalURL,n=a.mediaId,o=a.mpk,p=a.post,q=a.socialContextType,r=a.thumbnailImageSrc,s=a.trackingToken;b[0]!==n||b[1]!==p?(a={isMediaRendered:!0,mediaId:n,post:p},b[0]=n,b[1]=p,b[2]=a):a=b[2];n=c("usePolarisSponsoredPostCTAFooterDominantColor")(a);p=n.ctaFooterViewpointRef;b[3]!==l||b[4]!==q||b[5]!==s?(a=function(){c("InstagramODS").incr("web.ads.feed.link_click"),c("InstagramWebAdEventsAuditFalcoEvent").log(function(){return{client_token:s,event:"persistent_cta_click",social_context_type:q}}),l!==null&&l==="story"?c("InstagramODS").incr("web.ads.story.msite_persistent_link_click"):c("InstagramODS").incr("web.ads.feed.persistent_link_click")},b[3]=l,b[4]=q,b[5]=s,b[6]=a):a=b[6];var t=a;a=k+((n=e)!=null?n:0)+"px";b[7]!==a?(e={bottom:a},b[7]=a,b[8]=e):e=b[8];var u=e;b[9]!==l?(n=function(){l!==null&&l==="story"?c("InstagramODS").incr("web.ads.story.msite_persistent_cta_rendered"):c("InstagramODS").incr("web.ads.feed.persistent_cta_rendered")},a=[l],b[9]=l,b[10]=n,b[11]=a):(n=b[10],a=b[11]);j(n,a);b[12]!==u||b[13]!==f||b[14]!==g||b[15]!==h||b[16]!==m||b[17]!==t||b[18]!==r?(e=function(a){return i.jsx("div",{className:"x1escl5o xtzzx4i xixxii4 xr6a42u x11uqc5h",ref:a,style:u,children:i.jsx(c("PolarisPostFooterCTA.react"),{ctaAdditionalAnimation:f,ctaDominantColor:h,disableAnimation:!0,externalURL:m,forceBottomBorder:!1,icon:i.jsx(c("PolarisSponsoredPersistentCTAThumbnail.react"),{thumbnailImageSrc:r}),isActive:!0,isForAd:!0,isForPersistentCta:!0,onClick:t,showChevron:!0,showRoundedBorder:!0,text:g})})},b[12]=u,b[13]=f,b[14]=g,b[15]=h,b[16]=m,b[17]=t,b[18]=r,b[19]=e):e=b[19];b[20]!==p||b[21]!==e?(n=i.jsx(c("PolarisClickEventLoggerProvider.react"),{children:i.jsx(c("PolarisTrackingNodeProvider.react"),{ref:p,trackingNode:86,children:e})}),b[20]=p,b[21]=e,b[22]=n):n=b[22];b[23]!==o||b[24]!==n||b[25]!==s?(a=i.jsx(c("PolarisTrackingCodeProvider.react"),{isSponsored:!0,m_pk:o,trackingToken:s,children:n}),b[23]=o,b[24]=n,b[25]=s,b[26]=a):a=b[26];return a}function a(a){var b=d("react-compiler-runtime").c(25),e=a.entryPoint,f=a.mpk,g;b[0]!==f?(g=c("getPolarisPostIdFromNativeId")(f),b[0]=f,b[1]=g):g=b[1];var h=g;f=d("polarisAdsSelectors.react").useFeedAdInfo(h,n);g=d("polarisAdsSelectors.react").useStoryAdInfo(h,m);g=e!==null&&e==="story"?g:f;b[2]!==h?(f=function(a){return d("polarisPostSelectors").getPostById(a,h)},b[2]=h,b[3]=f):f=b[3];f=c("usePolarisSelector")(f);var j=f.isSidecar,k=f.src,o=f.thumbnailSrc;if(b[4]!==j||b[5]!==f){var p;p=j===!0?(p=d("PolarisPostUtils").getCurrentSidecarItemFromPost(f,0))==null?void 0:p.id:f.id;b[4]=j;b[5]=f;b[6]=p}else p=b[6];j=p;o=(p=o)!=null?p:k;if(j==null||o==null)return null;if(b[7]!==(g==null?void 0:g.ctaItems)||b[8]!==j){p=g==null?void 0:(p=g.ctaItems)==null?void 0:(k=p.get(j))==null?void 0:k.ctaLinkUrl;b[7]=g==null?void 0:g.ctaItems;b[8]=j;b[9]=p}else p=b[9];k=p;if(b[10]!==(g==null?void 0:g.ctaItems)||b[11]!==j){p=g==null?void 0:(p=g.ctaItems)==null?void 0:(p=p.get(j))==null?void 0:p.ctaLinkText;b[10]=g==null?void 0:g.ctaItems;b[11]=j;b[12]=p}else p=b[12];p=p;if(b[13]!==(g==null?void 0:g.ctaItems)||b[14]!==j){var q;q=g==null?void 0:(q=g.ctaItems)==null?void 0:(q=q.get(j))==null?void 0:q.ctaDominantColor;b[13]=g==null?void 0:g.ctaItems;b[14]=j;b[15]=q}else q=b[15];g=q;if(k==null||p==null)return null;b[16]!==p||b[17]!==g||b[18]!==e||b[19]!==k||b[20]!==j||b[21]!==f||b[22]!==a||b[23]!==o?(q=i.jsx(c("CometErrorBoundary.react"),{children:i.jsx(l,babelHelpers["extends"]({},a,{ctaLinkText:p,domColor:g,entryPoint:e,externalURL:k,mediaId:j,post:f,thumbnailImageSrc:o}))}),b[16]=p,b[17]=g,b[18]=e,b[19]=k,b[20]=j,b[21]=f,b[22]=a,b[23]=o,b[24]=q):q=b[24];return q}function m(a){return a}function n(a){return a}g["default"]=a}),98);
__d("PolarisNewsMultiregionBlock.react",["fbt","IGDSBox.react","IGDSNewsOffOutlineIcon.react","IGDSText.react","PolarisAdvisoryMessage.react","PolarisExternalLink.react","SableNewsEventFalcoEvent","react","react-compiler-runtime","usePolarisViewer"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||(i=d("react")),k=i.useEffect,l="https://transparency.fb.com/policies/other-policies/policies/news-legislation";function a(a){var b=d("react-compiler-runtime").c(14),e=a.isOwnProfile,f=a.userID,g=c("usePolarisViewer")();b[0]!==e||b[1]!==f||b[2]!==(g==null?void 0:g.id)?(a=function(){c("SableNewsEventFalcoEvent").log(function(){var a;return{account_viewed_id:f,event_name:"publisher_profile_block",ig_user_id:(a=g==null?void 0:g.id)!=null?a:"0",viewer_is_regulated_c18:e}})},b[0]=e,b[1]=f,b[2]=g==null?void 0:g.id,b[3]=a):a=b[3];var i=g==null?void 0:g.id,m;b[4]!==e||b[5]!==i||b[6]!==f?(m=[f,i,e],b[4]=e,b[5]=i,b[6]=f,b[7]=m):m=b[7];k(a,m);b[8]===Symbol["for"]("react.memo_cache_sentinel")?(i=j.jsx(c("IGDSBox.react"),{marginBottom:3,children:j.jsx(c("IGDSNewsOffOutlineIcon.react"),{alt:"Icon indicating that news is disabled",size:32})}),b[8]=i):i=b[8];b[9]!==e?(a=j.jsx(c("IGDSText.react"),{weight:"bold",children:e?h._(/*BTDS*/"__JHASH__wKIHchbDHIo__JHASH__"):h._(/*BTDS*/"__JHASH__I-K5phQ5CZs__JHASH__")}),b[9]=e,b[10]=a):a=b[10];b[11]===Symbol["for"]("react.memo_cache_sentinel")?(m=j.jsx("p",{children:j.jsx(c("IGDSText.react"),{color:"secondaryText",children:h._(/*BTDS*/"__JHASH__t5HmAhcDN2S__JHASH__",[h._implicitParam("=m2",j.jsx(c("PolarisExternalLink.react"),{href:l,children:h._(/*BTDS*/"__JHASH__1CjBBfncVci__JHASH__")}))])})}),b[11]=m):m=b[11];b[12]!==a?(i=j.jsxs(c("PolarisAdvisoryMessage.react"),{children:[i,a,m]}),b[12]=a,b[13]=i):i=b[13];return i}g["default"]=a}),226);
__d("usePolarisCommentsSortOrder",["PolarisSortCommentsUtil","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useState;function a(){return i(d("PolarisSortCommentsUtil").CommentsOptionValues.TOP)}g["default"]=a}),98);