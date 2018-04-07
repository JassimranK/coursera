def partitionPF (arr, l, r)
  p = arr[l]
  i = l+1
  for j in l+1..r
    #puts "For i=#{i}, j=#{j}, p= #{p} for array #{arr[l..r]}"
    if arr[j] < p
      #Swap (A[j] and A[i])
      temp = arr[j]
      arr[j] = arr[i]
      arr[i] = temp

      i=i+1
    end
  end
  #Swap A[l] and A[i-1]
  temp = arr[l]
  arr[l] = arr[i-1]
  arr[i-1] = temp
  #puts "Array is #{arr} with pivot #{arr[i-1]} at position #{i}"
  return i-1
end


def qsort(arr, l, r)
  comps = 0
  if l < r
    #************FOR LAST ELEMENT AS MEDIAN********
    #temp = arr[l]
    #arr[l] = arr[r]
    #arr[r]=temp
    if arr[l..r].length%2 == 0
      middle=(arr[l..r].length/2)-1
    else
      middle=arr[l..r].length/2
    end
    totalarr = [arr[l..r].first,arr[l..r][middle],arr[l..r].last].sort!
    #puts "First =#{arr[l..r].first}; Middle = #{arr[l..r][middle]}; Last = #{arr[l..r].last}"
    #puts "Median is #{totalarr[1]} and arr[l..r][middle] is #{arr[l..r][middle]}"
    #puts "Before excahnge #{arr[l..r]}"
    la = arr.index(arr[l..r].last)
    fr = arr.index(arr[l..r].first)
    md = arr.index(arr[l..r][middle])

    if totalarr[1] == arr[l..r].last
      temp = arr[la]
      arr[la]= arr[fr]
      arr[fr]=temp
      #puts "After LAST excahnge = #{arr[l..r][r]}"
    elsif totalarr[1] == arr[l..r][middle]

      temp = arr[md]
      #puts "temp = #{temp}"
      arr[md] = arr[fr]
      #puts "arr[l..r][middle] = #{arr[l..r][middle]}"
      arr[fr]=temp
      #puts "After excahnge = #{arr[l..r][l]}"
    end

    i = partitionPF arr, l, r
    comps = r - l
    #puts "Compasrions are #{comps}"
    #puts "Recursive left"
    comps += qsort(arr, l, i-1)
    #puts "Recursive Right"
    comps += qsort(arr, i+1, r)
  end
  return comps
end

numbersarr = []
File.open("testQuickSort.txt").each do |number|
    numbersarr << number.to_i
end
comps = 0
numarr = [ 3,8,2,5,1,4,9,7]
compsr = qsort numbersarr, 0, numbersarr.length-1
#compsr = qsort numarr, 0, numarr.length-1

puts "SORTED ARRAY: #{numarr} has #{compsr} comparisosns"
