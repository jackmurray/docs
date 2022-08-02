"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[964],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6010),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),u=n(2466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,o=e.lazy,p=e.block,f=e.defaultValue,m=e.values,k=e.groupId,h=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(t=null!=f?f:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,C=w.setTabGroupChoices,I=(0,r.useState)(y),P=I[0],O=I[1],T=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var x=N[k];null!=x&&x!==P&&g.some((function(e){return e.value===x}))&&O(x)}var D=function(e){var t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==P&&(E(t),O(a),null!=k&&C(k,String(a)))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=T.indexOf(e.currentTarget)+1;n=null!=(a=T[r])?a:T[0];break;case"ArrowLeft":var l,o=T.indexOf(e.currentTarget)-1;n=null!=(l=T[o])?l:T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},h)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return T.push(e)},onKeyDown:_,onFocus:D,onClick:D},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(b.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function f(e){var t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},6591:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return f}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=n(5488),i=n(5162),s=["components"],u={title:"Network Options",weight:25},c=void 0,d={unversionedId:"installation/network-options",id:"installation/network-options",title:"Network Options",description:"Note: Please reference the Networking page for information about CoreDNS, Traefik, and the Service LB.",source:"@site/docs/installation/network-options.md",sourceDirName:"installation",slug:"/installation/network-options",permalink:"/docs/docs/installation/network-options",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/network-options.md",tags:[],version:"current",lastUpdatedAt:1659484623,formattedLastUpdatedAt:"8/2/2022",frontMatter:{title:"Network Options",weight:25},sidebar:"mySidebar",previous:{title:"Configuration Options",permalink:"/docs/docs/installation/configuration"},next:{title:"High Availability with an External DB",permalink:"/docs/docs/installation/ha"}},p={},f=[{value:"Flannel Options",id:"flannel-options",level:3},{value:"Custom CNI",id:"custom-cni",level:3},{value:"Dual-stack installation",id:"dual-stack-installation",level:3},{value:"IPv6 only installation",id:"ipv6-only-installation",level:3}],m={toc:f};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," Please reference the ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/networking/"},"Networking")," page for information about CoreDNS, Traefik, and the Service LB.")),(0,l.kt)("p",null,"By default, K3s will run with flannel as the CNI, using VXLAN as the default backend. To change the CNI, refer to the section on configuring a ",(0,l.kt)("a",{parentName:"p",href:"#custom-cni"},"custom CNI"),". To change the flannel backend, refer to the flannel options section."),(0,l.kt)("h3",{id:"flannel-options"},"Flannel Options"),(0,l.kt)("p",null,"The default backend for flannel is VXLAN. To enable encryption, pass the IPSec (Internet Protocol Security) or WireGuard options below."),(0,l.kt)("p",null,"If you wish to use WireGuard as your flannel backend it may require additional kernel modules. Please see the ",(0,l.kt)("a",{parentName:"p",href:"https://www.wireguard.com/install/"},"WireGuard Install Guide")," for details. The WireGuard install steps will ensure the appropriate kernel modules are installed for your operating system. You need to install WireGuard on every node, both server and agents before attempting to leverage the WireGuard flannel backend option."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"CLI Flag and Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--flannel-backend=vxlan")),(0,l.kt)("td",{parentName:"tr",align:null},"(Default) Uses the VXLAN backend.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--flannel-backend=ipsec")),(0,l.kt)("td",{parentName:"tr",align:null},"Uses the IPSEC backend which encrypts network traffic.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--flannel-backend=host-gw")),(0,l.kt)("td",{parentName:"tr",align:null},"Uses the host-gw backend.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--flannel-backend=wireguard")),(0,l.kt)("td",{parentName:"tr",align:null},"Uses the WireGuard backend which encrypts network traffic. May require additional kernel modules and configuration.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--flannel-ipv6-masq")),(0,l.kt)("td",{parentName:"tr",align:null},"Apply masquerading rules to IPv6 traffic (default for IPv4). Only applies on dual-stack or IPv6-only clusters")))),(0,l.kt)("h3",{id:"custom-cni"},"Custom CNI"),(0,l.kt)("p",null,"Run K3s with ",(0,l.kt)("inlineCode",{parentName:"p"},"--flannel-backend=none")," and install your CNI of choice. Most CNI plugins come with their own network policy engine, so it is recommended to set ",(0,l.kt)("inlineCode",{parentName:"p"},"--disable-network-policy")," as well to avoid conflicts. IP Forwarding should be enabled for Canal and Calico. Please reference the steps below."),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Canal",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Visit the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.projectcalico.org/"},"Project Calico Docs")," website. Follow the steps to install Canal. Modify the Canal YAML so that IP forwarding is allowed in the container_settings section, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'"container_settings": {\n              "allow_ip_forwarding": true\n          }\n')),(0,l.kt)("p",null,"Apply the Canal YAML."),(0,l.kt)("p",null,"Ensure the settings were applied by running the following command on the host:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/cni/net.d/10-canal.conflist\n")),(0,l.kt)("p",null,"You should see that IP forwarding is set to true.")),(0,l.kt)(i.Z,{value:"Calico",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Follow the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.projectcalico.org/master/docs/reference/cni-plugin/configuration"},"Calico CNI Plugins Guide"),". Modify the Calico YAML so that IP forwarding is allowed in the container_settings section, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'"container_settings": {\n              "allow_ip_forwarding": true\n          }\n')),(0,l.kt)("p",null,"Apply the Calico YAML."),(0,l.kt)("p",null,"Ensure the settings were applied by running the following command on the host:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/cni/net.d/10-calico.conflist\n")),(0,l.kt)("p",null,"You should see that IP forwarding is set to true."))),(0,l.kt)("h3",{id:"dual-stack-installation"},"Dual-stack installation"),(0,l.kt)("p",null,"Dual-stack networking must be configured when the cluster is first created. It cannot be enabled on an existing single-stack cluster."),(0,l.kt)("p",null,"Dual-stack is supported on k3s v1.21 or above."),(0,l.kt)("p",null,"To enable dual-stack in K3s, you must provide valid dual-stack ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster-cidr")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"service-cidr")," on all server nodes. Both servers and agents must provide valid dual-stack ",(0,l.kt)("inlineCode",{parentName:"p"},"node-ip")," settings. Node address auto-detection is not supported on dual-stack clusters, because kubelet fetches only the first IP address that it finds. Additionally, only vxlan backend is supported currently. This is an example of a valid configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3s server --node-ip 10.0.10.7,2a05:d012:c6f:4611:5c2:5602:eed2:898c --cluster-cidr 10.42.0.0/16,2001:cafe:42:0::/56 --service-cidr 10.43.0.0/16,2001:cafe:42:1::/112\n")),(0,l.kt)("p",null,"Note that you can choose whatever ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster-cidr")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"service-cidr")," value, however the ",(0,l.kt)("inlineCode",{parentName:"p"},"node-ip")," values must correspond to the ip addresses of your main interface. Remember to allow ipv6 traffic if you are deploying in a public cloud."),(0,l.kt)("p",null,"If you are using a custom cni plugin, i.e. a cni plugin different from flannel, the previous configuration might not be enough to enable dual-stack in the cni plugin. Please check how to enable dual-stack in its documentation and verify if network policies can be enabled."),(0,l.kt)("h3",{id:"ipv6-only-installation"},"IPv6 only installation"),(0,l.kt)("p",null,"IPv6 only setup is supported on k3s v1.22 or above. Note that network policy enforcement is not supported on IPv6-only clusters when using the default flannel CNI. This is an example of a valid configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"k3s server --disable-network-policy\n")))}k.isMDXComponent=!0}}]);