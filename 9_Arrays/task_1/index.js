/*

Представьте, что мы разрабатываем систему очередей для какого-либо заведения. Например, для почты. Для этого мы создали массив peopleWaiting, который отображает текущий статус очереди:

const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];
По логике, следующую посылку по почте получит Кристина, после нее уже 1-м в очереди будет Олег.

Сейчас вам необходимо реализовать следующую логику в коде шаг за шагом:

Кристина и Олег получили посылки и ушли из очереди. Вам необходимо удалить их из массива.
Теперь подошла очередь к Кириллу. И неожиданно сотрудница почты говорит, что скоро у них обеденный перерыв, и она успеет обслужить только Кирилла. 
Поэтому все остальные люди, стоящие за Кириллом, решили не ждать, когда закончится обед, и просто ушли из отделения почты. 
Вам необходимо сначала удалить Кирилла из массива peopleWaiting, а затем удалить людей, которые не успели получить посылки.
Когда какой-либо человек получает посылку, необходимо вывести в модальном окне сообщение: “ name получил(а) посылку. 
В очереди осталось length человек.” (Замените name на имя человека, получившего посылку, а length - на количество человек, которые остались в очереди).

Если же человек не получил посылку и ушел из очереди, то выведите в модальном окне через alert() сообщение: “ name не получил(а) посылку и ушел(ла) из очереди”.

Рекомендуется создать 2 функции: giveParcel() - для выдачи посылки и удаления клиента из начала массива, 
leaveQueueWithoutParcel() - для удаления клиента, который не получил посылку из конца списка.

*/

const peopleWaiting = [
    "Кристина",
    "Олег",
    "Кирилл",
    "Мария",
    "Светлана",
    "Артем",
    "Глеб",
];

function giveParcel() {
    const client = peopleWaiting.shift();
    console.log(
        `${client} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`,
    );
    return client;
}

function leaveQueueWithoutParcel() {
    const client = peopleWaiting.pop();
    console.log(`${client} не получил(а) посылку и ушел(ла) из очереди.`);
    return client;
}

giveParcel();
giveParcel();
giveParcel();

leaveQueueWithoutParcel();
