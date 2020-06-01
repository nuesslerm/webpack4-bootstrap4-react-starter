
- [How does the internet work](#how-does-the-internet-work)
  - [Browser, ISP & DNS](#browser-isp--dns)
  - [Internet Backbone](#internet-backbone)
  - [Traceroute](#traceroute)
  - [How to improve performance of your website](#how-to-improve-performance-of-your-website)
  - [BE - FE](#be---fe)

# How does the internet work

## Browser, ISP & DNS

* `ISP: internet service provider`
* `DNS: domain name system`

```mermaid
sequenceDiagram
participant browser
participant ISP
participant DNS
%% end of participant declaration

%% Note over ISP: internet service provider
%% Note right of DNS: domain name system
%% end of notes

browser ->> ISP: requests website https://www.google.com
ISP -->> DNS: requests IP for google.com
DNS ->> browser: sends back IP address of domain name, e.g. ISP 172.217.7.23, localhost: 127.0.0.1
%% end of flow
```

----------------------------------------------------------------

![how-the-internet-works](./how-the-internet-works.png)

## [Internet Backbone](https://www.submarinecablemap.com/)

## Traceroute 

```bash
#!/bin/bash
traceroute google.com
```

## How to improve performance of your website
 - location of server 
 - how many trips
 - size of files

## BE - FE
![BE-FE](BE-FE.png)