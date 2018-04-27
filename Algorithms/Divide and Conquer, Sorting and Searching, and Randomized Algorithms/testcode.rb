


numInvs= 0;
def sort_and_count(arr)

  #puts "Length of arr #{arr} is: #{arr.length}"
  if arr.length <= 1
    return [arr,0]
  else
    #puts "ELSE"
    len = (arr.length/2.0).round
    left,right = arr.each_slice(len).to_a

    sortedLeft, leftInvs = sort_and_count(left)
    #puts "SortedLeft is #{sortedLeft} with #{leftInvs} inversions"

    sortedRight, rightInvs = sort_and_count(right)
    #puts "SortedRight is #{sortedRight} with #{rightInvs} inversions"

    merged, mergedInvs = merge_and_count_Split(sortedLeft, sortedRight)
    return [ merged, leftInvs + rightInvs + mergedInvs,]
  end
end

def merge_and_count_Split(sortedLeft, sortedRight)
  i=0
  j=0
  invs=0
  output= []
  while i < sortedLeft.length and j < sortedRight.length
      if sortedLeft[i] < sortedRight[j]
        output << sortedLeft[i]
        i+=1
      else
        output << sortedRight[j]
        j+=1
        invs += sortedLeft.length - i
      end
  end

  if i < sortedLeft.length
    output += sortedLeft[i..(sortedLeft.length-1)]
  else
    output += sortedRight[j..(sortedRight.length-1)]
  end
  return [output,invs]
end


numbersarr = []
File.open("testfile.txt").each do |number|
    numbersarr << number.to_i
end

#numarr = [ 5, 4, 3, 2, 1 , 0]


#numInvs = customsort(numbersarr)

output, numInvs = sort_and_count numbersarr
puts numInvs


#copy = numbersarr.sort {|x,y| x <=> y}
