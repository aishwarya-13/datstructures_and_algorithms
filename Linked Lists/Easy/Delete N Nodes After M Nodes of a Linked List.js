/**
 * https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/description/
 */

 /**
 Aishwarya
 
 1]Keep two variables m and n that hold the number of nodes to be deleted and kept
 2]Keep a previous variable that makes new linkages
 3]Iterate till mth position save it in a prev variable
 4]Iterate till nth position and make new connection with the prev variable
 5]Reset the counters
  */
 var deleteNodes = function(head, m, n) {
    let keep = m,
        del = n,
        node = head;
    while(node){
        if(keep === 1){
            let prev = node //keep reference of mth node to make new link
            //move n nodes ahead
            while(node && del >= 0){
                node = node.next
                del--
            }
            //make new links
            if(node === null){
                prev.next = null
                break;
            }else{
                prev.next = node
            }
            //reset pointers
            del = n
            keep = m
            continue
        }
        keep--
        node = node.next
    }
    return head;
};

 /**
 Aishwarya
 
 1]Keep two variables m and n that hold the number of nodes to be deleted and kept
 2]Keep a previous variable that makes new linkages
 3]Iterate till mth position save it in a prev variable
 4]Iterate till nth position and make new connection with the prev variable
 5]Reset the counters
  */
 var deleteNodes = function(head, m, n) {
    let prev = null,
        keep = m,
        del = n,
        node = head;
    while(node){
        if(keep === 1){
            prev = node;//save the node to make new link
            while(node && del>=1){
                node = node.next;
                del--;
            }
            if(node !== null){
                //Point m-1'th node to n+1'th node
                prev.next = node.next;
            }else{
                //if node has traversed till end then point prev to null too
                prev.next = null;
                break;
            }
            node = node.next;//move pointer to m+1th position
            //reset
            keep = m;
            del = n;
            continue;
        }
        keep--;
        node = node.next;
    }
    return head;
};