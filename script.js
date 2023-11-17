markRead = () => {
  var notificationList = notification_list.children;

//   console.log(document.getElementsByClassName("notification-dot-active"));
  for (var i = 0; i < notificationList.length; i++) {
    var notification = notificationList[i];
    notification.classList.remove("notification-unread");
    // console.log(notification.getElementsByClassName("notification-dot-active"));
    var notificationSpan = notification.getElementsByClassName(
      "notification-dot-active"
    );
    if (notificationSpan.length > 0)
      notificationSpan[0].classList.remove("notification-dot-active");
  }

  notification_count.innerText=0;
};
