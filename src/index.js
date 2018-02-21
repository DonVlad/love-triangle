/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    preferences.unshift(0);
    var nodeArr = [];
    var stepsCount = 0;

    function makeStep(step) {

        if (stepsCount < preferences.length) {
            var nextStep;

            if (nodeArr.indexOf(step) === -1) {

                stepsCount ++;
                nodeArr.push(step);
                nextStep = preferences[step];
                makeStep(nextStep);

            }

            else {

                for (var i = 1; i < preferences.length; i++) {

                    if (nodeArr.indexOf(i) == -1) {
                        nextStep = i;
                        break;
                    }

                }
                nodeArr.push(step)
                nodeArr.push('-');
                makeStep(nextStep);
            }
        }

        return;
    }

    makeStep(1);
    nodeArr = nodeArr.join(' ');
    nodeArr = nodeArr.split('-');
    var count = 0;

    for (var i = 0; i < nodeArr.length; i++) {
        var node = nodeArr[i].split(' ');
        // console.log(node);

        for (var j = 0; j < node.length; j++) {

            if (node[j] !== '' && node.lastIndexOf(node[j]) !== -1)  {

                if (node.lastIndexOf(node[j]) - node.indexOf(node[j]) === 3) {
                        count ++;
                }
            }
        }

    }
    count = count / 2;
    // console.log(nodeArr);
    // console.log(count);
    return count;

};
