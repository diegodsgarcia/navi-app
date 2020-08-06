<h1 align="center">Navi Expo Manage</h1>

<p align="center">
  <img src="src/assets/navi.png">
</p>

### Vantagens

- Configuração unica para ambas plataforma (iOS/ Android)
- API HTTP para realização de requisições de notificações

### Desvantagens

- Ficar dependete da API de notificações do Expo
- Não é possivel debugar pelo portal FCM nem pelo emulador
- É necessário obrigatoriamente utilizar o serviço FCM para android e o APNS para iOS

### Arquitetura
![Arquitetura Expo Manage](https://docs.expo.io/static/images/sending-notification.png)

### Plataforma de notificações para testes
- [https://expo.io/notifications](https://expo.io/notifications)